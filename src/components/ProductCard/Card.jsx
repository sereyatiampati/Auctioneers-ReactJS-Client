import { useNavigate } from "react-router";
import BidPage from "../bidPage/BidPage";
function Card({product}) {
    const {name, image, description} = product
    const navigate= useNavigate()
    return (
    <div class="product-card col-md-4 mt-2" onClick={()=> navigate ('/product')} >   
        <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                        <img src={image} class="card-img img-fluid" alt="" style={{height: "240px", width: '300px', objectFit: 'cover'}}/>
                                </div>
                            </div>

                            <div class="card-body pb-1">
                                <div class="mb-2">
                                    <h6 class="font-weight-semibold mb-2">
                                        <a href="#" class="text-dark mb-2" data-abc="true">{name}</a>
                                    </h6>

                                    <p style={{color: "#4A60A1"}} data-abc="true">Top Bid: 36,000 KES</p>
                                </div>

                                <p class="text-muted" data-abc="true">6 bids placed</p>

                                <div class="text-muted mb-3">Condition: No visible defects</div>
                                <div class="text-muted mb-2 pb-2 border-bottom" >Auction ending in: 1 day 6 hours</div>

                                <button type="button" class="btn bg-light mr-3" style={{color: "#4A60A1"}}><i class="bi bi-share"></i></button>
                                <button type="button" class="btn bg-light mr-3" style={{color: "#4A60A1"}}><i class="fa-regular fa-heart"></i></button>
                                <button type="button" class="btn bg-light" style={{color: "#4A60A1"}}><i class="fa-solid fa-plus"></i> Bid</button>
                            </div>
                        </div>        

   </div>
     );
}

export default Card;