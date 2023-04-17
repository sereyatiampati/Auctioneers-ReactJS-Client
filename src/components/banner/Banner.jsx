import React from 'react'
import './Banner.css'

export const Banner = ({ sellertext, buyertext }) => {
  return (
    <>
      <div className="div">
        <picture>
          <source type="image/webp" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F21d4290877be4427a4361421da739b24"
            className="image"
          />
          <div className="we-verify-all-auctioned-items">
            We verify all auctioned items at our warehouse
            {/* Buyer/seller text go here */}
          </div>
        </picture>
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
