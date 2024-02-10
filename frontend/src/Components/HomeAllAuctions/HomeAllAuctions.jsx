import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomeAllAuctions.css';

import flag from '../Assets/flag.svg';
import logoName from '../Assets/logoName.svg';

const HomeAllAuctions = () => {
  const [auctions, setAuctions] = useState([]); // Додано стан для аукціонів

  useEffect(() => {
    // Завантажуємо дані аукціонів при завантаженні компонента
    const fetchAuctions = async () => {
      try {
        const response = await axios.get('/api/latest-items/');
        setAuctions(response.data); // Оновлюємо стан аукціонів даними з API
      } catch (error) {
        console.error('There was an error fetching the auctions!', error);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <div className='home-first-container'>
      <div className='article-container'>
        <p className='text-charity'>
          Благодійні аукціони по всій Україні
          <img src={flag} alt="flag" className='flag'/>
        </p>
        <p className='text-register'>Реєструйся</p>
        <p className='text-buy'>Купуй лот</p>
        <p className='text-help'>Допомагай закрити збір!</p>
        <button className='all-auctions'>Усі аукціони</button>
      </div>
      <div className='logo-name-container'>
        <img src={logoName} alt="logo" className='logoName'/>
      </div>
      {/* Відображення списку аукціонів */}
      <div className='auctions-list'>
        {auctions.map(auction => (
          <div key={auction.id} className='auction'>
            <h3>{auction.title}</h3>
            {/* Додати інші деталі аукціону, якщо необхідно */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeAllAuctions;
