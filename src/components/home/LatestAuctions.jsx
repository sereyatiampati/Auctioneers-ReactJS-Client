import Card from "../ProductCard/Card";

function LatestAuctions (){
    return (
        <div className="mb-4">
        <h2 className="text-center">LATEST AUCTIONS</h2>
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
    </div>
    );
}
 
export default LatestAuctions;