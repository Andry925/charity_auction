import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import './HomeAllAuctions.css';

import flag from '../Assets/flag.svg';
import logoName from '../Assets/logoName.svg';

const HomeAllAuctions = () => {
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/latest-items/");
        setAuctions(response.data);
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    fetchAuctions();
  }, []);

  const navigateToCreateAuction = () => {
    navigate('/all-auctions');
  };

  return (
      <main>
    <div className='home-first-container'>
      <div className='article-container'>
        <p className='text-charity'>Благодійні аукціони по всій Україні<img src={flag} alt="flag" className='flag'/></p>
        <p className='text-register'>Реєструйся</p>
        <p className='text-buy'>Купуй лот</p>
        <p className='text-help'>Допомагай закрити збір!</p>
        <button className='all-auctions' onClick={navigateToCreateAuction}>Створити аукціон</button>
      </div>
      <div className='logo-name-container'>
        <img src={logoName} alt="logo" className='logoName'/>
      </div>
    </div>


        <section className='auctions-section'>
          {auctions.map(auction => (
            <div key={auction.id} className='auction-item'>
              <img src={auction.img} alt={auction.title} className="auction-image"/>
              <h3>{auction.title}</h3>
              <p>{auction.description}</p>
            </div>
          ))}
        </section>
      </main>
  );
}

export default HomeAllAuctions;
