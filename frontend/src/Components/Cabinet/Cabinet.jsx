import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Cabinet.css";

const Cabinet = () => {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        const fetchUserAuctions = async () => {
            try {
                // Ensure this URL points to your API for fetching user-specific auctions
                const response = await axios.get('http://127.0.0.1:8000/api/my-auctions/', {
                    withCredentials: true // If you're using cookies for authentication
                });
                setAuctions(response.data); // Set the user's auctions in the state
            } catch (error) {
                console.error('Error fetching user auctions:', error);
            }
        };

        fetchUserAuctions();
    }, []);

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Особистий кабінет</div>
                <div className="underline"></div>
            </div>
            <div className='account'>
                <div className='account-info'>
                    <div className="info-caption">Акаунт</div>
                    <div className="name-info">Ім'я</div>
                    <div className="email-info">Email</div>
                </div>
                <div className='account-lots'>
                    <div className="lot-caption">Мої аукціони</div>
                    {auctions.map((auction) => (
                        <div key={auction.id} className="lot">
                            <div className="lot-photo">
                                {/* Ensure your server is configured to serve images from the correct path */}
                                <img src={auction.image_url} alt="lot" />
                            </div>
                            <div className='lot-descr'>
                                <p>{auction.description}</p>
                            </div>
                            <div className="lot-price">
                                <p>{auction.price} грн</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='logout'>
                <a href='/home' className='submit'>
                    <div className="submit">Вийти</div>
                </a>
            </div>
        </div>
    );
}

export default Cabinet;
