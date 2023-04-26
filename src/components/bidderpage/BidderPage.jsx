import { useState, useEffect } from "react";
import './bidderpage.css'
import { Banner } from "./Banner";
import { ProductsContainer } from "../ProductsContainer/ProductsContainer";
import Pagination from "../Pagination/Pagination";
import API_BASE_URL from "../../utilities/env";


function BidderPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bidsPerPage, setbidsPerPage] = useState(9);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => {
        console.log('products data:', data);
        setProducts(data);
      })
      .catch(error => console.log(error));
  }, []);

  console.log('products:', products);
  console.log(products)
  const indexOfLastBid = currentPage * bidsPerPage;
  const indexOfFirstBid = indexOfLastBid - bidsPerPage;
  const currentBids = Array.isArray(products) ? products.slice(indexOfFirstBid, indexOfLastBid) : [];
  return (
    <>
      <Banner />
      <ProductsContainer products={currentBids} />
      <Pagination totalbids={products.length} bidsPerPage={bidsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  );
}

export default BidderPage;
