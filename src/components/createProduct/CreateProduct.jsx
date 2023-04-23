import React, { useEffect, useState } from 'react';
import './createProduct.css';

const CreateProduct = ({ user }) => {
    // Define the list of categories
    const [categories, setCategories] = useState([])
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startingBid, setStartingBid] = useState(0);
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    function handleSubmit() {
        console.log("click")
        e.preventDefault()
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                category: category,
                start_time: startTime,
                end_time: endTime,
                starting_bid: startingBid,
                description: description,
                image: imageUrl,
                seller_id: user.id
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }
    return (
        <div className='product-form'>
            <form onSubmit={handleSubmit}>
                <div className="text">Add a product to Auction</div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Product<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="form6Example1" className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="category">Category<span style={{ color: 'red' }}>*</span></label>
                            <select id="category" className="form-control" onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Select a category</option>
                                {categories.map(category => (
                                    <option key={category.category_id} value={category.category_name}>{category.category_name}</option>
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
                            <label className="form-label" htmlFor="form6Example1">Starting Bid (KES)<span style={{ color: 'red' }}>*</span></label>
                            <input type="number" id="form6Example1" className="form-control" onChange={(e) => setStartingBid(e.target.value)} />
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
