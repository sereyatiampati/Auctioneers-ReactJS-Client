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
  const [filter, setFilter] = useState("all");


  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => {
        console.log('products data:', data);
        setProducts(data);
      })
      .catch(error => console.log(error));
  }, []);

  // const handleSortingOptionChange = (event) => {
  //   setSortingOption(event.target.value);
  // }

  // console.log('products:', products);
  // const filteredProducts = sortingOption === 'open' ? products.filter(p => p.status === 'open') : products;
  // const sortedProducts = [...filteredProducts].sort((a, b) => {
  //   if (sortingOption === 'open') {
  //     return new Date(a.end_time) - new Date(b.end_time);
  //   } else {
  //     return b.bid_count - a.bid_count;
  const now = new Date();
  const filteredProducts = products.filter((product) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "active") {
      if (!product.end_date) {
        return true;
      }
      const endDate = new Date(product.end_date);
      return endDate > now;
    }
    if (filter === "ended") {
      if (!product.end_date) {
        return false;
      }
      const endDate = new Date(product.end_date);
      return endDate <= now;
    }
  });
 
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const indexOfLastBid = currentPage * bidsPerPage;
  const indexOfFirstBid = indexOfLastBid - bidsPerPage;
  // const currentBids = sortedProducts.slice(indexOfFirstBid, indexOfLastBid);
  const currentBids = Array.isArray(products) ? filteredProducts.slice(indexOfFirstBid, indexOfLastBid) : [];
  return (
    <>
    <Banner />
    <div className="filter">
        <label htmlFor="filter-select">Filter by:</label>
        <select id="filter-select" value={filter} onChange={handleFilterChange}>
          <option value="all">All auctions</option>
          <option value="active">Active auctions</option>
          <option value="ended">Ended auctions</option>
        </select>
      </div>
      <ProductsContainer products={currentBids} />
      <Pagination totalbids={products.length} bidsPerPage={bidsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default BidderPage;
