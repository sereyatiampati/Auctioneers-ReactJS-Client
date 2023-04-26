import React, { useState, useEffect } from 'react';
import './bidhistory.css';

function Bidhistory() {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/latest_products')
      .then(response => response.json())
      .then(data => setBids(data))
      .catch(error => console.error(error));
  }, []);

  console.log(bids);

  return (
    <div className="history-card">
      <div className="card-header">
        <h1>BID HISTORY</h1>
        <h2>{bids.length} Items in Bids</h2>
      </div>
      <ul className="list-group list-group-flush">
        {bids.map((bid) => (
          <li key={bid.id} className="list-group-item">
            <div className="row">
              <div className="col-md-6">
                <div className="item-image">
                  <img src={bid.image} alt={bid.name} />
                </div>
                <div className="item-details">
                  <h5 className="item-name">{bid.name}</h5>
                  <p className="item-description">{bid.description}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item-bid-details">
                  <p className="item-start-price">Starting price: {bid.starting_price}</p>
                  <p className="item-start-date">Start time: {bid.start_date}</p>
                  <p className="item-end-date">End time: {bid.end_date}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bidhistory;
