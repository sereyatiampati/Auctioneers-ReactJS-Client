import React from 'react';
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import './BidPage.css'

function BidPage() {
    const {id}=useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [starting_price, setStartingPrice] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);
    const [bids, setBids] = useState([]);
    const [filter, setFilter] = useState('open');


    useEffect(()=> {
        fetch(`https://testing-e1kb.onrender.com/products/${id}`)
        .then((r) => r.json())
        .then(({name, description, start_date, end_date, starting_price, image})=> {
                  setName(name);
                  setDescription(description);
                  setStartDate(start_date);
                  setEndDate(end_date)
                  setStartingPrice(starting_price);
                  setImage(image);
        });

        fetch(`https://testing-e1kb.onrender.com/products/${id}/bids`)
      .then((r) => r.json())
      .then((data) => {
        setBids(data.bids);
      });
    },[])
    const words =name.split(' ');

    // filter bids based on the selected filter
  const filteredBids = bids.filter((bid) => {
    if (filter === 'open') {
      return bid.status === 'open';
    } else {
      return true; // show all bids
    }
  });
  return (
    <div className="container extend-height my-5">
    <div className="row">
         <div className="col-4 item-photo">
              <img style={{maxWidth:'100%'}} src={image} />
          </div>
          <div className="col-5" style={{border:'0px solid gray'}}>
              <h3>{name}</h3>    
              <h5 style={{color:'#3E54AC'}}><a >{words[0]}</a>
              {/* <small style={{color:'#3E54AC'}}>(5054 views)</small>*/} 
              </h5> 
  
              <h6 className="title-price"><small>Current highest bid</small></h6>
              <h3 style={{marginTop:'0px'}}>KES {starting_price*135}</h3>
                  
              <div className="section" style={{paddingBottom:'20px'}}>
                  <button className="btn btn-success"><span style={{marginRight:'20px'}} className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> Bid</button>
              </div>                                        
          </div>                              
  
          <div className="col-9">
              <ul className="menu-items">
                  <li className="active">Description</li>
                  <li>Additional information</li>
                  <li>Auction History</li>
                  <li>Vendor information</li>
              </ul>
              <div style={{width:'100%', borderTop:'1px solid silver'}}>
                  <p style={{padding:'15px'}}>
                      <small>
                     {description} 
                      With its built-in photo editor, the Galaxy S4 allows you to edit photos with the touch of a finger, eliminating extraneous background items. Usable with most carriers, this smartphone is the perfect companion for work or entertainment.
                      </small>
                  </p>
                  <small>
                      <ul>
                          <li>Super AMOLED capacitive touchscreen display with 16M colors</li>
                          <li>Available on GSM, AT T, T-Mobile and other carriers</li>
                          <li>Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 / 2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks</li>
                          <li>MicroUSB and USB connectivity</li>
                          <li>Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and Bluetooth</li>
                          <li>Wi-Fi hotspot to keep other devices online when a connection is not available</li>
                          <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                          <li>Front-facing camera features autofocus, an LED flash, dual video call capability and a sharp 4128 x 3096 pixel picture</li>
                          <li>Features 16 GB memory and 2 GB RAM</li>
                          <li>Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS</li>
                          <li>17 hours of talk time, 350 hours standby time on one charge</li>
                          <li>Available in white or black</li>
                          <li>Model I337</li>
                          <li>Package includes phone, charger, battery and user manual</li>
                          <li>Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches deep and weighs a mere 4.59 oz </li>
                      </ul>  
                  </small>
              </div>
          </div>		
      </div>
  </div>
  );
}

export default BidPage;
