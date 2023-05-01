import React from 'react';
import './ConfirmBidCard.css';

function ConfirmBidCard({toggleModal}) {
  return (
    <div className="modal">
       <div onClick={toggleModal} className="overlay"></div>
      <div className="confirm-bid-card">
        <div className='modalCloseBtn'><button onClick={()=> closeModal(false)}>X</button></div>
      <div className="confirm-bid-card__image">
      <img src="/bid.jpg"/>
      </div>
      <div className="confirm-bid-card__details">
        <h2>Confirm Your Bid</h2>
        <p>You have placed a bid for $26,000. Should we place this as your Bid? </p>
        <button className="confirm-bid-card__button" onClick={()=> console.log("Bid submitted")}>Yes, Place My Bid</button>
        <button className="confirm-bid-card__button-cancel" onClick={toggleModal}>Cancel</button>
      </div>
      </div>
    </div>
  );
}

export default ConfirmBidCard;
