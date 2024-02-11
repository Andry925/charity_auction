import React, { useState } from 'react';
import axios from 'axios';

const CreateAuction = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        starting_bid: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Використовуйте відповідний URL та налаштування авторизації
            const response = await axios.post('http://127.0.0.1:8000/api/create-auction/', formData, {
                headers: {
                    'Authorization': 'Token'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error creating auction:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="number"
                name="starting_bid"
                value={formData.starting_bid}
                onChange={handleChange}
                placeholder="Starting Bid"
            />
            <button type="submit">Create Auction</button>
        </form>
    );
};

export default CreateAuction;
