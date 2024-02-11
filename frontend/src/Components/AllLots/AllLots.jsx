import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllLots.css';

const AllLots = () => {
    const [lots, setLots] = useState([]); // State to store the lots

    useEffect(() => {
        // Function to fetch lots
        const fetchLots = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/items/"); // Adjust the endpoint as needed
                setLots(response.data); // Set the lots in state
            } catch (error) {
                console.error("Error fetching lots:", error);
            }
        };

        fetchLots();
    }, []);

    return (
        <div className="al-lots-container">
            <div className='last-lots'>
                {lots.map(lot => (
                    <div key={lot.id} className="lot-home">
                        <div className="lot-home-photo">
                            {/* Ensure your backend sends the correct path for the image */}
                            <img src={lot.image} alt="lot" />
                        </div>
                        <div className='lot-home-descr'>
                            <p>{lot.description}</p>
                        </div>
                        <div className="lot-home-price">
                            <p>{lot.starting_bid} грн</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllLots;
