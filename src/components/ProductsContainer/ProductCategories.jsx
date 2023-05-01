import { useEffect, useState } from "react";
import Card from "../ProductCard/Card";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../../utilities/env";

export const ProductCategories = () =>  {
    const params = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${API_BASE_URL}/category_products/${params.categoryID}`)
        .then((resp) => resp.json())
        .then((data) => setProducts(data))
    },[params.categoryID])

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
 
export default ProductCategories;