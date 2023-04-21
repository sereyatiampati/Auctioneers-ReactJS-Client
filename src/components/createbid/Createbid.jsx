import React, { useEffect, useState } from 'react';
import './Createbid.css';

const Createbid = () => {
    // Define the list of categories
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='form'>
            <form>
                <div className="text">Update / Create auction</div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Auction Product</label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="category">Category</label>
                            <select id="category" className="form-control">
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
                            <label className="form-label" htmlFor="form6Example1">Desired start time (MM/DD/YY)</label>
                            <input type="date" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Desired end time (MM/DD/YY)</label>
                            <input type="date" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Starting Bid (KES)</label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block mb-4">Picture</button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block mb-4">Complete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Createbid;
