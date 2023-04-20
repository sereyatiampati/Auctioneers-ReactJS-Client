import Card from "../ProductCard/Card";

function LatestAuctions (){
    return (
        <div className="my-5">
        <div className="auctions-title mb-5">
          <h2 className="text-center"><span className="border-bottom">LATEST</span> <i class="fa-sharp fa-solid fa-gavel fa-flip-horizontal px-2" style={{color:"#fd7e14"}}></i><span className="border-bottom">AUCTIONS</span></h2>
      
        </div>
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