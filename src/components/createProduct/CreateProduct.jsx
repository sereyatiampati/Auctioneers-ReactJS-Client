import React, { useEffect, useState } from 'react';
import './createProduct.css';
import { useNavigate } from 'react-router';
import API_BASE_URL from '../../utilities/env';

const CreateProduct = ({ user }) => {
    // Define the list of categories
    const [categories, setCategories] = useState([])
    const [products,setProducts]=useState([])
    // For the form
    const [name, setName] = useState('');
    const [category, setCategory] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startingBid, setStartingBid] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const navigate = useNavigate();

    console.log(user)

    useEffect(() => {
        if (category) {
            console.log(category.id);
        }
    }, [category]);
    

    useEffect(() => {
        fetch(`${API_BASE_URL}/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${API_BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                category_id: category ? category.id : null,
                start_date: startTime,
                end_date: endTime,
                starting_price: startingBid,
                description: description,
                image: imageUrl,
                seller_id: user.seller_id
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Product not created');
                }
            })
            .then(data => {
                setProducts(data);
                navigate('/seller');
            })
            .catch(err => {
                console.error(err);
                alert('Error: Product not created');
            });
    }
    const test = categories.map((category) => console.log(category.id))
    
    // console.log(category.id)
    if(!user) { return <div>Please Log in to create a product</div> }
    return (
        <div className='product-form'>
            <form onSubmit={handleSubmit}>
                <div className="text">Add a product to Auction</div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Product<span style={{color: 'red'}}>*</span></label>
                            <input type="text" id="form6Example1" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="category">Category<span style={{ color: 'red' }}>*</span></label>
                            <select id="category" className="form-control" onChange={(e) => setCategory({id : e.target.value})}>
                                <option value="">Select a category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.category_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Desired start time (MM/DD/YY)<span style={{ color: 'red' }}>*</span></label>
                            <input type="date" id="form6Example1" className="form-control" onChange={(e) => setStartTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Desired end time (MM/DD/YY) <span style={{ color: 'red' }}>*</span></label>
                            <input type="date" id="form6Example2" className="form-control" onChange={(e) => setEndTime(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Starting Bid (KES)<span style={{color: 'red'}}>*</span></label>
                            <input type="number" id="form6Example1" onChange={(e) => setStartingBid(e.target.value)} className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Product Description<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="form6Example1" className="form-control" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Image-url<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="form6Example1" className="form-control" onChange={(e) => setImageUrl(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    {/* <div className="col">
                        <button type="submit" className="btn btn-primary btn-block mb-4">Picture</button>
                    </div> */}
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct;
