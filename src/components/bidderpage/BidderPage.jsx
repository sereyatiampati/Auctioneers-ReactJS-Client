import { useState, useEffect } from "react";
import './bidderpage.css'
import { Banner } from "./Banner";
import { ProductsContainer } from "../ProductsContainer/ProductsContainer";
import Pagination from "../Pagination/Pagination";
import API_BASE_URL from "../../utilities/env";

function BidderPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bidsPerPage, setBidsPerPage] = useState(9);
  const [sortingOption, setSortingOption] = useState('all');

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => {
        console.log('products data:', data);
        setProducts(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSortingOptionChange = (event) => {
    setSortingOption(event.target.value);
  }

  console.log('products:', products);
  const filteredProducts = sortingOption === 'open' ? products.filter(p => p.status === 'open') : products;
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortingOption === 'open') {
      return new Date(a.end_time) - new Date(b.end_time);
    } else {
      return b.bid_count - a.bid_count;
    }
  });
  console.log(sortedProducts);
  const indexOfLastBid = currentPage * bidsPerPage;
  const indexOfFirstBid = indexOfLastBid - bidsPerPage;
  const currentBids = sortedProducts.slice(indexOfFirstBid, indexOfLastBid);
  return (
    <>
    <Banner />
    <div className="text-center"> 
        <div className="sorting">
          <label htmlFor="sorting-option">Sort By:</label>
          <select id="sorting-option" value={sortingOption} onChange={handleSortingOptionChange}>
            <option value="open">Open Bids</option>
            <option value="all">All Bids</option>
          </select>
        </div>
      </div>
      
      <ProductsContainer products={currentBids} />
      <Pagination totalbids={sortedProducts.length} bidsPerPage={bidsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Banner />
      <ProductsContainer products={currentBids} />
      <Pagination totalbids={products.length} bidsPerPage={bidsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default BidderPage;
