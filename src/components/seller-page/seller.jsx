import { useNavigate } from "react-router";
import "./seller.css"
import React from 'react';

function Seller() {
    const navigate = useNavigate();
  return (
    <>
        <div class="extend-height">
            <div class="container-fluid seller-page-banner-background">
                <div class="row align-items-center py-4">
                    <div class="col-md-4" />
                    <div class="col-xs-12 col-md-4 text-center">
                        <p class="h4">Your past auctions</p>
                    </div>
                    <div class="col-xs-12 col-md-4 text-center text-md-right">
                        <button type="button" class="btn btn-primary" onClick={()=> navigate('/new-product')}>New Auction</button>
                    </div>
                </div>
            </div>
            <div class="table-responsive-lg">
                <table class="table mt-5">
                    <thead>
                        <tr>
                        <th scope="col">Auction number</th>
                        <th scope="col">Auctioned product</th>
                        <th scope="col">Category</th>
                        <th scope="col">Auction status</th>
                        <th scope="col">Reserve price (KES)</th>
                        <th scope="col">Auction start time</th>
                        <th scope="col">Bidders</th>
                        <th scope="col">Highest bid price</th>
                        <th scope="col">Auction end time</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Television</td>
                            <td>Electronics</td>
                            <td>Upcoming</td>
                            <td>15000</td>
                            <td>29 February 2023 08:00</td>
                            <td>22</td>
                            <td>22000</td>
                            <td>6 March 2023 08:00</td>
                            <td><img src="https://img.icons8.com/ios-glyphs/30/04BCF6/edit--v2.png"/><img src="https://img.icons8.com/ios-glyphs/30/FF0000/filled-trash.png"/></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Television</td>
                            <td>Electronics</td>
                            <td>Active</td>
                            <td>15000</td>
                            <td>16nd February 2023 08:00</td>
                            <td>22</td>
                            <td>22000</td>
                            <td>26th February 2023 08:00</td>
                            <td><img src="https://img.icons8.com/ios-glyphs/30/04BCF6/edit--v2.png"/><img src="https://img.icons8.com/ios-glyphs/30/FF0000/filled-trash.png"/></td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Television</td>
                            <td>Electronics</td>
                            <td>Active</td>
                            <td>15000</td>
                            <td>16 February 2023 08:00</td>
                            <td>22</td>
                            <td>22000</td>
                            <td>26 February 2023 08:00</td>
                            <td><img src="https://img.icons8.com/ios-glyphs/30/04BCF6/edit--v2.png"/><img src="https://img.icons8.com/ios-glyphs/30/FF0000/filled-trash.png"/></td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Television</td>
                            <td>Electronics</td>
                            <td>Active</td>
                            <td>15000</td>
                            <td>16 February 2023 08:00</td>
                            <td>22</td>
                            <td>22000</td>
                            <td>26 February 2023 08:00</td>
                            <td><img src="https://img.icons8.com/ios-glyphs/30/04BCF6/edit--v2.png"/><img src="https://img.icons8.com/ios-glyphs/30/FF0000/filled-trash.png"/></td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Television</td>
                            <td>Electronics</td>
                            <td>Closed</td>
                            <td>15000</td>
                            <td>06 February 2023 08:00</td>
                            <td>22</td>
                            <td>22000</td>
                            <td>16 February 2023 08:00</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )

}

export default Seller;