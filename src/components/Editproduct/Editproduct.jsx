import { useEffect, useState } from 'react';
import './Editproduct.css';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import React from 'react';

export default function Editproduct() {
    // Define the list of categories
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState([])
    // For the form
    const [name, setName] = useState('');
    const [category, setCategory] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startingBid, setStartingBid] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedProduct = {
            name: name,
            category_id: category.id,
            start_time: startTime,
            end_time: endTime,
            starting_price: startingBid,
            description: description,
            image_url: imageUrl
        };

        fetch(`http://localhost:3000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(response => {
                if (response.ok) {
                    // navigate to the product details page for the updated product
                    navigate(`/seller`);
                } else {
                    throw new Error('Failed to update product');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    //   <label htmlfor="category">Category:</label>
    //       <select id="categories" name="category_id" onChange={handleFormInput}>
    //         <option value={editData?.category?.id}>
    //           {produuct.category}
    //         </option>
    //         {categories.map((option) => (
    //           <option key={option.id} value={option.id}>
    //             {option.name}
    //           </option>
    //         ))}
    //       </select>

    return (
        <div className='product-form'>
            <form onSubmit={handleUpdate}>
                <div className="text">Edit auctioned</div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Product<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="form6Example1" defaultValue={product.name} className="form-control" onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="category">Category<span style={{ color: 'red' }}>*</span></label>
                            <select id="category" className="form-control" onChange={(e) => setCategory({ id: e.target.value })}>
                                <option value=''>Select a category</option>
                                {categories.map(category => {
                                    <option key={category.id} value={category.id}>{category.category_name}</option>

                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Desired start time (MM/DD/YY)<span style={{ color: 'red' }}>*</span></label>
                            <input type="date" id="form6Example1" className="form-control" defaultValue={product.start_date} onChange={(e) => setStartTime(e.target.value)} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example2">Desired end time (MM/DD/YY) <span style={{ color: 'red' }}>*</span></label>
                            <input type="date" id="form6Example2" className="form-control" defaultValue={product.end_date} onChange={(e) => setEndTime(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Starting Bid (KES)<span style={{ color: 'red' }}>*</span></label>
                            <input type="number" id="form6Example1" defaultValue={product.starting_price} className="form-control" onChange={(e) => setStartingBid(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Product Description<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="form6Example1" defaultValue={product.description} className="form-control" onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">Image-url<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" id="form6Example1" defaultValue={product.image} className="form-control" onChange={(e) => setImageUrl(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

