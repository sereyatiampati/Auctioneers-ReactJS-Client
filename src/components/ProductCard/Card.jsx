import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './card.css'
function Card({ product }) {
    const [timeRemaining, setTimeRemaining] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const startDate = product && product.start_date ? new Date(product.start_date) : null;
            const endDate = product && product.end_date ? new Date(product.end_date) : null;
            const timeDiff = endDate && startDate ? endDate.getTime() - now.getTime() : 0;
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDiff / 1000) % 60);
            if (!endDate || timeDiff <= 0) {
                setTimeRemaining('Auction Ended');
            } else {
                setTimeRemaining(`Auction ending in: ${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [product]);
    
    return (
    <div class="product-card col-md-4 mt-2" >   
        <div class="card">
                            <div class="card-body">
                                <div class="card-img-actions">
                                        <img src={product.image} class="card-img img-fluid" alt="" style={{height: "240px", width: '300px', objectFit: 'cover'}} onClick={()=>navigate(`/auction/${id}`)}/>
                                </div>
                            </div>

                            <div class="card-body pb-1">
                                <div class="mb-2">
                                    <h6 class="font-weight-semibold mb-2">
                                        <a class="text-dark mb-2" data-abc="true">{product.name}</a>
                                    </h6>

                                    <p style={{color: "#4A60A1"}} data-abc="true">Top Bid: {product.starting_price*135} KES</p>
                                </div>

                                <p class="text-muted" data-abc="true">6 bids placed</p>

                                <div class="text-muted mb-3">Condition: No visible defects</div>
                    <div class="text-muted mb-2 pb-2 border-bottom" >{timeRemaining}</div>
                    <button disabled={timeRemaining === 'Auction Ended'} type="button" class="btn bg-light mr-3" style={{ color: "#4A60A1" }}><i class="bi bi-share"></i></button>
                    <button disabled={timeRemaining === 'Auction Ended'} type="button" class="btn bg-light mr-3" style={{ color: "#4A60A1" }}><i class="fa-regular fa-heart"></i></button>
                    <button disabled={timeRemaining === 'Auction Ended'} type="button" class="btn bg-light" style={{color: "#4A60A1"}} onClick={()=>navigate(`/auction/${id}`)}><i class="fa-solid fa-plus"></i> Bid</button>
                </div>
            </div>
        </div>
     );
}

export default Card;
