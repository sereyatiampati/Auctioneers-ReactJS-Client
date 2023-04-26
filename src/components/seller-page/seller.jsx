import { useNavigate } from "react-router";
import "./seller.css"
import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Seller({ user }) {
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }
    // const [products, setProducts] = useState(user.products);

    // const navigate = useNavigate();
    const [products, setProducts] = useState([]);
  
    // useEffect(() => {
    //   if (user) {
    //     const fetchProducts = async () => {
    //       try {
    //         const response = await fetch(`http://localhost:3000/products?seller_id=${user.id}`);
    //         const data = await response.json();
    //         setProducts(data);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
  
    //     fetchProducts();
    //   } else {
    //     navigate('/login');
    //   }
    // }, [user, navigate]);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${user.seller_id}`)
        .then(res => res.json())
        .then(prods => setProducts(prods))
    },[])
    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`http://localhost:3000/products/${productId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setProducts(products.filter(product => product.id !== productId));
            } else {
                throw new Error('Failed to delete product');
            }
        } catch (error) {
            console.error(error);
        }
    };
    console.log(user.seller_id)
    const oneproduct = products.map((product, index) => {
        const startdate = new Date(product.start_time).toLocaleString('en-US', { timeZone: 'EAT' });
        return (
          <tr key={product.id}>
            <th scope="row">{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.category_name}</td>
            <td>Closed</td>
            <td>15000</td>
            <td>{startdate}</td>
            <td>22</td>
            <td>22000</td>
            <td>16 February 2023 08:00</td>
            <th scope="col">
              <button className="seller-button" onClick={(e) => handleDelete(product.id)}><i class="far fa-trash-can"></i></button>
            </th>
            <th scope="col">
              <Link to={`/editproduct/${product.id}`} className="seller-button"><i class="far fa-pen-to-square"></i></Link>
            </th>
            <td></td>
          </tr>
        )
      })
      

    console.log(products)
    return (
        <>
            <div class="extend-height">
                <div class="container-fluid seller-page-banner-background">
                    <div class="row align-items-center py-4">
                        <div class="col-md-4" />
                        <div class="col-xs-12 col-md-4 text-center">
                            <p class="h4">{user.id}'s past auctions</p>
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
                                <th scope="col">Auction number</th>
                                <th scope="col">Auctioned product</th>
                                <th scope="col">Category</th>
                                <th scope="col">Auction status</th>
                                <th scope="col">Reserve price (KES)</th>
                                <th scope="col">Auction start time</th>
                                <th scope="col">Bidders</th>
                                <th scope="col">Highest bid price</th>
                                <th scope="col">Auction end time</th>
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
        </>
    )

}

export default Seller;

{/* <tr>
<th scope="row">3</th>
<td>item</td>
<td>category</td>
<td>Closed</td>
<td>15000</td>
<td>06 February 2023 08:00</td>
<td>22</td>
<td>22000</td>
<td>16 February 2023 08:00</td>
<td></td>
</tr> */}