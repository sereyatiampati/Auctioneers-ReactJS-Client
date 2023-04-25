import './card.css'
function Card({ product }) {
    const now = new Date();
    const startDate = product && product.start_date ? new Date(product.start_date) : null;
    const endDate = product && product.end_date ? new Date(product.end_date) : null;
    const timeDiff = endDate && startDate ? endDate.getTime() - now.getTime() : 0;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const startDateString = startDate ? `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString()}` : '';
    const endDateString = endDate ? `${endDate.toLocaleDateString()} ${endDate.toLocaleTimeString()}` : '';
    let auctionstatus = '';
    if (!endDate || timeDiff <= 0) {
        auctionstatus = 'Auction Ended';
    } else {
        auctionstatus = `Auction ending in: ${days} day(s) ${hours} hour(s)`;
    }
    console.log(product.name);
    return (
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
                    {startDateString && <p class="text-muted" data-abc="true">Start Date : {startDateString}</p>}
                    {endDateString && <div class="text-muted mb-3">End Date: {endDateString}</div>}
                    <div class="text-muted mb-2 pb-2 border-bottom" >{auctionstatus}</div>
                    <button type="button" class="btn bg-light mr-3" style={{ color: "#4A60A1" }}><i class="bi bi-share"></i></button>
                    <button type="button" class="btn bg-light mr-3" style={{ color: "#4A60A1" }}><i class="fa-regular fa-heart"></i></button>
                    <button type="button" class="btn bg-light" style={{ color: "#4A60A1" }}><i class="fa-solid fa-plus"></i> Bid</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
