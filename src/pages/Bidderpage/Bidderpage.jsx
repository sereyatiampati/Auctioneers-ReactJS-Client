import { useState, useEffect } from "react";
import { Banner } from "../../components/banner/Banner";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import Pagination from "../../components/Pagination/Pagination";
function Bidderpage() {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [bidsPerPage, setbidsPerPage] = useState(9);
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const indexOfLastBid = currentPage * bidsPerPage;
    const indexOfFirstBid = indexOfLastBid - bidsPerPage;
    const currentBids = products.slice(indexOfFirstBid, indexOfLastBid);
    return (
        <>
            <Banner />
            <ProductsContainer products={currentBids} />
            <Pagination totalbids={products.length} bidsPerPage={bidsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    );
}
export default Bidderpage;