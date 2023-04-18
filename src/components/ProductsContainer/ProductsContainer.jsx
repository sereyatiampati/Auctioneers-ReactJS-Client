import { useEffect, useState } from "react";
import Card from "../ProductCard/Card";

function ProductsContainer({products}) {
  const onecard = products.map((product) => <Card key={product.id} product={product}/>)
    return (
        <>
    <div class="container d-flex justify-content-center mt-50 mb-50">
            
            <div class="row">
              {onecard}
            </div>
        </div>
        </>
     );
}
 
export default ProductsContainer;