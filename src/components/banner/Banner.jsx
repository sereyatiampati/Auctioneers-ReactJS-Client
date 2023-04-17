import React from 'react'
import './Banner.css'

export const Banner = ({ sellertext, buyertext }) => {
  return (
    <>
      <div className="div">
        <div className="we-verify-all-auctioned-items">
          We verify all auctioned items at our warehouse
          {/* //Buyer/seller text go here */}
        </div>
        <div className='overlay'>
        </div>
        <div className="builder-image-sizer image-sizer" />
      </div>
      <div className="mydiv">
        <div className="online-safety-assured-all-ite">
          Online safety assured! All items are insured under ActionHub’s buyer protection
        </div>
      </div>
    </>
  );

}

