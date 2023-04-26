import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './bidhistory.css';
import { getJwtToken, getJSONPayloadFromJwt } from '../../utilities/auth';
import API_BASE_URL from '../../utilities/env';

function Bidhistory() {
  const [bids, setBids]= useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/bidhistory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization : `Bearer ${getJwtToken()}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data)
          setBids(data)});
      }
    });
  }, []);



  return (
    <div className="card">
      <div className="card-header">
        <h1>BID HISTORY</h1>
        {bids.length > 0 ? (
          <h2>{bids.length} Items in Bids</h2>
          ) : (
<div>
              <p className="text-white">There are currently no bids on this item.</p>
              <Button variant="primary" as={Link} to="/auctions">
                Bid Now
              </Button>
            </div>
          )}
        </div>
{bids.length > 0 && (
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
        )}
      </div>
    );
  }
  
  export default Bidhistory;
