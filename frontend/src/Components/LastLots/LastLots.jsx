import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LastLots.css';

const LastLots = () => {
    const [lots, setLots] = useState([]);

    useEffect(() => {
        axios.get('/api/latest-items/')
            .then(response => {
                setLots(response.data); // Зберігаємо дані у стан
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, []); // Пустий масив залежностей, щоб запускати ефект лише при монтуванні компоненту

    return (
        <div className='last-lots-container'>
            <div className='last-lots'>
                <p>Останні лоти |
                    <a href="allLots" className="all-lots">Усі лоти</a>
                </p>
            </div>
            <div className='collection-buttons'>
                {lots.map(lot => (
                    <div className='banner' key={lot.id}>
                        <img src={lot.image_url} alt="lot" className="lot-img" />
                        <p className='lotDescr'>{lot.description}</p>
                        <p className='lotPrice'>{lot.current_bid}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LastLots;
