function Card({ product }) {
    const now = new Date();
    const startDate = new Date(product.start_date)
    const endDate = new Date(product.end_date);
    const timeDiff = endDate.getTime() - now.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const startDateString = `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString()}`
    const endDateString = `${endDate.toLocaleDateString()} ${endDate.toLocaleTimeString()}`;
    let auctionstatus = ''
    if (timeDiff <= 0) {
        auctionstatus = 'Auction Ended'
    }
    else {
        auctionstatus = `Auction ending in: ${days} day(s) ${hours} hour(s)`
    }
    console.log(product.name)
    return (
<<<<<<< HEAD
        <div class="col-md-4 mt-2">
            <div class="card">
                <div class="card-body">
                    <div class="card-img-actions">
                        <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" class="card-img img-fluid" width="96" height="300" alt="" />
                    </div>
                </div>
                <div class="card-body pb-1">
                    <div class="mb-2">
                        <h6 class="font-weight-semibold mb-2">
                            <a href="#" class="text-dark mb-2" data-abc="true">{product.name}</a>
                        </h6>
                        <p style={{ color: "#4A60A1" }} data-abc="true">Start price : ${product.starting_price}</p>
                    </div>
                    <p class="text-muted" data-abc="true">Start Date : {startDateString}</p>
                    <div class="text-muted mb-3">End Date: {endDateString}</div>
                    <div class="text-muted mb-2 pb-2 border-bottom" >{auctionstatus}</div>
                    <button type="button" class="btn bg-light mr-3" style={{ color: "#4A60A1" }}><i class="bi bi-share"></i></button>
                    <button type="button" class="btn bg-light mr-3" style={{ color: "#4A60A1" }}><i class="fa-regular fa-heart"></i></button>
                    <button type="button" class="btn bg-light" style={{ color: "#4A60A1" }}><i class="fa-solid fa-plus"></i> Bid</button>
                </div>
            </div>
        </div>
    );
=======
    <div class="col-md-4 mt-2">   
        <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                    
                                        <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1562074043/234.png" class="card-img img-fluid" width="96" height="250" alt=""/>
                                </div>
                            </div>

                            <div class="card-body pb-1">
                                <div class="mb-2">
                                    <h6 class="font-weight-semibold mb-2">
                                        <a href="#" class="text-dark mb-2" data-abc="true">Toshiba Notebook with 500GB HDD & 8GB RAM</a>
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
>>>>>>> 730d69b77cb3003e5b9e699ef0bd4fbf99314310
}

export default Card;
