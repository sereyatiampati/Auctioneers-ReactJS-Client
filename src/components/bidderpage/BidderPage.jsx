import { useState, useEffect } from "react";
import './bidderpage.css'
import { Banner } from "./Banner";
import { ProductsContainer } from "../ProductsContainer/ProductsContainer";
import Pagination from "../Pagination/Pagination";

function BidderPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bidsPerPage, setBidsPerPage] = useState(9);
  const [sortingOption, setSortingOption] = useState('all');

  useEffect(() => {
    fetch('http://localhost:3000/products')
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
    
      <ProductsContainer products={currentBids} />
      <Pagination totalbids={products.length} bidsPerPage={bidsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default BidderPage;
