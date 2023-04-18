import { useEffect, useState } from "react";
import Card from "../ProductCard/Card";

function ProductsContainer({products}) {
// const[products,setProducts]=useState([])

//   useEffect(() => {
//     fetch('http://localhost:3000/products')
//     .then(res => res.json())
//     .then(data => setProducts(data))
//   },[])

    
  const onecard = products.map((product) => <Card key={product.id} product={product}/>)
    return (
        <>
        <div class="container d-flex justify-content-center mt-50 mb-50">
            
            <div class="row">
              {onecard}
              {/* <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/>  */}
            </div>
        </div>
        </>
     );
}
 
export default ProductsContainer;