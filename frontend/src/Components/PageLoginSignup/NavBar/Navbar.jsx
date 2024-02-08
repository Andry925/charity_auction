import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.svg'
import companyName from '../Assets/companyName.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='company-img'>
        <img src={logo} alt="logo" className="logo" />
        <img src={companyName} alt="company" className='company'/>
      </div>
        
        <ul>
          <li className='live'>LIVE</li>
          <li className='top100'>Top 100</li>
          <li><button className="open-collection">Відкрити збір</button></li>
          <li><button className="sell">Продати</button></li>
          <li className='login'>Увійти</li>
          <li className='signup'>Реєстрація</li>
        </ul>
    </div>
  )
}

export default Navbar;