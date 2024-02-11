import './LastLots.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LastLots.css';

const LastLots = () => {
    const [lots, setLots] = useState([]);

        useEffect(() => {
            axios.get('/api/latest-items/')
                .then(response => {
                    setLots(response.data); 
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                })
        }, []); 
    
        return (
            <div className='last-lots-container'>
            <div className='last-lots-caption'>
                <p>Останні лоти | <a href="/all-auctions" className="all-lots-caption"> Усі лоти</a>
                </p>
            </div>
            <div className='last-lots'>
                <a href='/auction'>
                    <div className="lot-home">
                        <div className="lot-home-photo">
                        {lots.map(lot => (
                           <div key={lot.id}>
                           <img src={lot.image_url} alt="lot"/>
                           <p className='lot-home-descr'>{lot.description}</p>
                           <p className='lot-home-price'>{lot.current_bid} грн</p>
                            </div>
                                    ))}
                        </div>
                    </div>
                </a>
                <a href='/auction'>
                    <div className="lot-home">
                        <div className="lot-home-photo">
                        {lots.map(lot => (
                           <div key={lot.id}>
                           <img src={lot.image_url} alt="lot"/>
                           <p className='lot-home-descr'>{lot.description}</p>
                           <p className='lot-home-price'>{lot.current_bid} грн</p>
                            </div>
                                    ))}
                        </div>
                    </div>
                </a>
                <a href='/auction'>
                    <div className="lot-home">
                        <div className="lot-home-photo">
                        {lots.map(lot => (
                           <div key={lot.id}>
                           <img src={lot.image_url} alt="lot"/>
                           <p className='lot-home-descr'>{lot.description}</p>
                           <p className='lot-home-price'>{lot.current_bid} грн</p>
                            </div>
                                    ))}
                        </div>
                    </div>
                </a>
                <a href='/auction'>
                    <div className="lot-home">
                        <div className="lot-home-photo">
                        {lots.map(lot => (
                           <div key={lot.id}>
                           <img src={lot.image_url} alt="lot"/>
                           <p className='lot-home-descr'>{lot.description}</p>
                           <p className='lot-home-price'>{lot.current_bid} грн</p>
                            </div>
                                    ))}
                        </div>
                    </div>
                </a>
                <a href='/auction'>
                    <div className="lot-home">
                        <div className="lot-home-photo">
                        {lots.map(lot => (
                           <div key={lot.id}>
                           <img src={lot.image_url} alt="lot"/>
                           <p className='lot-home-descr'>{lot.description}</p>
                           <p className='lot-home-price'>{lot.current_bid} грн</p>
                            </div>
                                    ))}
                        </div>
                    </div>
                </a>
                <a href='/auction'>
                    <div className="lot-home">
                        <div className="lot-home-photo">
                        {lots.map(lot => (
                           <div key={lot.id}>
                           <img src={lot.image_url} alt="lot"/>
                           <p className='lot-home-descr'>{lot.description}</p>
                           <p className='lot-home-price'>{lot.current_bid} грн</p>
                            </div>
                                    ))}
                        </div>
                    </div>
                </a>
        </div>
    </div>
    );
}

export default LastLots;
