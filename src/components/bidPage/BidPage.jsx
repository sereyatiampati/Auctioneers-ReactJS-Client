import React from 'react';
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { getJwtToken} from '../../utilities/auth'
import API_BASE_URL from '../../utilities/env';

// styled components
import './BidPage.css'
import './../bidConfirmation/ConfirmBidCard.css'

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const [category, setCategory] = useState({});
    const [bids, setBids]= useState([])
    const [showModal, setShowModal] =useState(false)
  
    useEffect(()=> {
        fetch(`${API_BASE_URL}/products/${id}`)
        .then((r) => r.json())
        .then(({name, description, start_date, end_date, starting_price, image, category})=> {
                  setName(name);
                  setDescription(description);
                  setStartDate(start_date);
                  setEndDate(end_date)
                  setStartingPrice(starting_price);
                  setImage(image);
                  setCategory(category)
        });

        fetch(`${API_BASE_URL}/productbids/${id}`)
      .then((r) => r.json())
      .then((bids) => {
        setBids(bids);
      });
    },[])
    const words =name.split(' ');

    const [bidAmount, setBidAmount]= useState('')

  function handleIncrementClick() {
    let inputValue = parseInt(bidAmount)
    setBidAmount(inputValue+1);
  }

  function handleDecrementClick() {
    if (bidAmount > 1) {
      setBidAmount(bidAmount - 1);
    }
  }


    function handleConfirmBidSubmit(e) {
        setErrors([])
        let bidInfo= {
          bid_amount: bidAmount,
          product_id: id,
        };

        console.log(bidInfo)
        fetch(`${API_BASE_URL}/bids`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization : `Bearer ${getJwtToken()}`,
          },
          body: JSON.stringify(bidInfo)
        })
          .then((r) => {
            if (r.ok) {
              r.json().then(bid=> {
                console.log(bid)
                console.log("Bid submitted!")
                setShowModal(false)
                toast.success(`Successfully bidded $${bidAmount}`, {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              })
            }
            else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
  }

  function handleBidClick() {
    setShowModal(true);
  }

  function handleCancelClick() {
    setShowModal(false);
    toast.error('Bid Cancelled!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  if(showModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
  <>
      <div className="container extend-height my-5">
        <div className="row">
         <div className="col-4 item-photo">
              <img style={{maxWidth:'100%'}} src={image} />
          </div>
          <div className="col-5" style={{border:'0px solid gray'}}>
              <h3>{name}</h3>    
              <h5 style={{color:'#3E54AC'}}><a >{words[0]}</a>
              </h5> 
  
              <h6 className="title-price" style={{marginBottom:'10px'}}><small>Current highest bid: </small></h6>
              <h3 style={{marginTop:'0px'}}>$ {starting_price}</h3>
                  
            <div class="input-group w-auto justify-content-start align-items-center mt-3 " >
                <input type="button" value="-" class="button-minus border-0 bg-transparent icon-shape icon-sm mx-1 " data-field="quantity" onClick={handleDecrementClick}/>
                <input type="number" step="1" name="quantity" value={bidAmount} class="quantity-field border-0 text-center w-25" onChange={(e)=> setBidAmount(e.target.value)} placeholder={starting_price}/>
                <input type="button" value="+" class="button-plus border-0 icon-shape icon-sm bg-transparent " data-field="quantity" onClick={handleIncrementClick}/>
                <button id="btnSubmit"  class="btn btn-info form-control btn-block mx-5" type="submit" 
                onClick={handleBidClick} >Bid</button>

                {showModal && (
                 <div className="modal">
                    <div onClick={handleCancelClick} className="overlay"></div>
                    <div className="confirm-bid-card">
                      <div className='modalCloseBtn'><button onClick={handleCancelClick}>X</button></div>
                        <div className="confirm-bid-card__image">
                        <img src="/bid.jpg"/>
                        </div>
                        <div className="confirm-bid-card__details">
                          <h2>Confirm Your Bid</h2>
                          <p>You have placed a bid for <span style={{color: 'cornflowerblue'}}>$ {bidAmount}</span>. Should we place this as your Bid? </p>
                          <button className="confirm-bid-card__button" onClick={(e) => handleConfirmBidSubmit(e)}>Yes, Place My Bid</button> 
                          <button className="confirm-bid-card__button-cancel" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>
               </div>

                )}

            </div>
            <p className='mt-5'>Category: <span  style={{fontWeight: '500', color:'#3E54AC'}} >{category.category_name}</span> </p>
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
      <ToastContainer/>
  </div>
  </>
  );
}

export default BidPage;
