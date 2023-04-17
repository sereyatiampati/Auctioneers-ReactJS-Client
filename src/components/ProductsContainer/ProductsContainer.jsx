import Card from "../ProductCard/Card";

function ProductsContainer() {
    
    return (
        <>
    <div class="container d-flex justify-content-center mt-50 mb-50">
            
            <div class="row">
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
              <Card/> 
            </div>
        </div>
        </>
     );
}
 
export default ProductsContainer;