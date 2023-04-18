import React from 'react';
import './ConfirmBidCard.css';

function ConfirmBidCard(props) {
  return (
    <div className="confirm-bid-card">
      <div className="confirm-bid-card__image">
      <img src="/bid.jpg"/>
      </div>
      <div className="confirm-bid-card__details">
        <h2>Confirm Your Bid</h2>
        <p>You have placed a bid for $26,000. Should we place this as your Bid? ${props.bidAmount}</p>
        <button className="confirm-bid-card__button" onClick={props.onConfirm}>Yes, Place My Bid</button>
        <button className="confirm-bid-card__button" onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmBidCard;
