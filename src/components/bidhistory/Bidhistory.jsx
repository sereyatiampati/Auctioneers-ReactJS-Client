import React from 'react';
import './bidhistory.css';

function Bidhistory() {
  return (
    <div className="card">
      <div className="card-header">
        <h1>BID HISTORY</h1>
        <h2>4 Items in Bids</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <img src="https://images.pexels.com/photos/552774/pexels-photo-552774.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item" />
          <div className="item-details">
            <h5 className="item-name">Alarm Clock</h5>
            <span className="item-price">KSH1,550</span>
          </div>
        </li>
        <li className="list-group-item">
          <img src="https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item" />
          <div className="item-details">
            <h5 className="item-name">Digital Camera</h5>
            <span className="item-price">KSH5,600</span>
          </div>
        </li>
        <li className="list-group-item">
          <img src="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item" />
          <div className="item-details">
            <h5 className="item-name">Head phones</h5>
            <span className="item-price">KSH2,200</span>
          </div>
        </li>
        <li className="list-group-item">
          <img src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="item" />
          <div className="item-details">
            <h5 className="item-name">Digital Watch</h5>
            <span className="item-price">KSH600</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Bidhistory;
