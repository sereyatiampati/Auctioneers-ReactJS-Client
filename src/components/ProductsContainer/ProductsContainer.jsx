import { useEffect, useState } from "react";
import Card from "../ProductCard/Card";

export const ProductsContainer = ({products}) =>  {
  const allProducts = products.map((product) => <Card key={product.id} product={product}/>)
    return (
        <>
    <div class="container d-flex justify-content-center mt-50 mb-50"> 
            <div class="row">
              {allProducts}
            </div>
        </div>
        </>
     );
}
 
export default ProductsContainer;
