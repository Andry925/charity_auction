import React from 'react'
import './HomeAllAuctions.css'

import flag from '../Assets/flag.svg';
import logoName from '../Assets/logoName.svg';

const HomeAllAuctions = () => {
  return (
    <div className='home-first-container'>
        <div className='article-container'>
            <p className='text-charity'>Благодійні аукціони по всій Україні
                <img src={flag} alt="flag" className='flag'/>
            </p>
            <p className='text-register'>Реєструйся</p>
            <p className='text-buy'>Купуй лот</p>
            <p className='text-help'>Допомагай закрити збір!</p>
            <a href="/all-auctions"><button className='all-auctions'>Усі аукціони</button></a>
        </div>
        <div className='logo-name-container'>
            <img src={logoName} alt="logo" className='logoName'/>
        </div>
    </div>
  )
}

export default HomeAllAuctions;