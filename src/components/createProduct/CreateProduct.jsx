import React, { useEffect, useState } from 'react';
import './createProduct.css';

const CreateProduct = () => {
    // Define the list of categories
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='product-form'>
            <form>
                <div className="text">Add a product to Auction</div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Product<span style={{color: 'red'}}>*</span></label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="category">Category<span style={{color: 'red'}}>*</span></label>
                            <select id="category" className="form-control">
                                <option value="">Select a category</option>
                                {/* {categories.map(category => (
                                    <option key={category.category_id} value={category.category_name}>{category.category_name}</option>
                                ))} */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Desired start time (MM/DD/YY)<span style={{color: 'red'}}>*</span></label>
                            <input type="date" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Desired end time (MM/DD/YY) <span style={{color: 'red'}}>*</span></label>
                            <input type="date" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Starting Bid (KES)<span style={{color: 'red'}}>*</span></label>
                            <input type="number" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Product Description<span style={{color: 'red'}}>*</span></label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Image-url<span style={{color: 'red'}}>*</span></label>
                            <input type="text" id="form6Example1" className="form-control" />
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
