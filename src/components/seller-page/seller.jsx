import { useNavigate } from "react-router";
import "./seller.css"
import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import moment from "moment";
import "moment-timezone"
import API_BASE_URL from "../../utilities/env"
import { getJwtToken } from "../../utilities/auth";

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Seller({ user }) {
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

    console.log(user)
    const [products, setProducts] = useState([]);
    const [userprods, setUserprods] = useState([]);

    useEffect(() => {
        if (user) {
            const fetchProducts = async () => {
                try {
                    const response = await fetch(`${API_BASE_URL}/users/${user.seller_id}/products`);
                    const data = await response.json();
                    setUserprods(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchProducts();
        } else {
            navigate('/login');
        }
    }, [user, navigate]);

    console.log(userprods)
    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getJwtToken()}`,
                }
            });
            if (response.ok) {
                setProducts(products.filter(product => product.id !== productId));
                setUserprods(userprods.filter(product => product.id !== productId));
                toast.error(`Product Deleted successfully!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            } else {
                throw new Error('Failed to delete product');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleCloseBid = async (productId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/close_bid/${productId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${getJwtToken()}`,
                },
                body: JSON.stringify({...userprods, end_date: moment().toISOString()}),
            });
            if (response.ok) {
                const updatedProducts = userprods.map((product) => {
                    if (product.id === productId) {
                        return {
                            ...product,
                            end_date: moment().toISOString(),
                        };
                    } else {
                        return product;
                    }
                });
                setUserprods(updatedProducts);
                console.log("clicked")
            } else {
                throw new Error('Failed to close bid');
            }
        } catch (error) {
            console.error(error);
        }
    }



    console.log(user.seller_id)
 
    const oneproduct = userprods.map((product, index) => {
        const startdate = moment(product.start_date).format('DD MMMM YYYY HH:mm');
        const enddate = moment(product.end_date).format('DD MMMM YYYY HH:mm')
        const isActive = moment().isBefore(moment(product.end_date));
        const statusClass = isActive ? 'text-success' : 'text-danger';
        const statusLabel = isActive ? 'Active' : 'Closed';

        return (
            <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.category.category_name}</td>
                <td>
                    <span className={`font-weight-bold ${statusClass}`}>{statusLabel}</span>
                </td>
                <td>{product.starting_price}</td>
                <td>{startdate}</td>
                <td>{product.count}</td>
                <td>{enddate}</td>
                <td>{product.highest_bid}</td>
                <th scope="col">
                    <button className="seller-button-delete" onClick={(e) => handleDelete(product.id)}>
                        <i className="far fa-trash-can"></i>
                    </button>
                </th>
                <th scope="col">
                    <Link to={`/editproduct/${product.id}`} className="seller-button-edit">
                        <i className="far fa-pen-to-square"></i>
                    </Link>
                </th>
                <th scope="col">
                    {isActive ? (
                        <button className="seller-button text-danger" onClick={(e) => handleCloseBid(product.id)}>
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            Close bid
                        </button>
                    ) : (
                        <span className="text-muted">Closed</span>
                    )}
                </th>
                <td></td>
            </tr>
        );
    });


    console.log(products)
    return (
        <div className="sellerDashboard">
            <div class="extend-height">
                <div class="container-fluid seller-page-banner-background">
                    <div class="row align-items-center py-4">
                        <div class="col-md-4" />
                        <div class="col-xs-12 col-md-4 text-center">
                            <p class="h4">Your past auctions</p>
                        </div>
                        <div class="col-xs-12 col-md-4 text-center text-md-right">
                            <button type="button" class="btn btn-primary" onClick={() => navigate('/new-product')}>New Auction</button>
                        </div>
                    </div>
                </div>
                <div class="table-responsive-lg">
                    <table class="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Auctioned product</th>
                                <th scope="col">Category</th>
                                <th scope="col">Auction status</th>
                                <th scope="col">Reserve price ($)</th>
                                <th scope="col">Auction start time</th>
                                <th scope="col">Totals Bids</th>
                                <th scope="col">Auction end time</th>
                                <th scope="col">Highest bid price</th>
                                {/* <th scope="col">Actions</th> */}
                                {/* <th scope="col"><i class="far fa-trash-can"></i></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {oneproduct}
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )

}

export default Seller;