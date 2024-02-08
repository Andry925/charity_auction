import React from 'react';
import Navbar from './NavBar/Navbar';
import Search from './Search/Search';
import LoginSignup from './LoginSignup/LoginSignup';
import Footer from './Footer/Footer'

function PageLoginSignup() {
  return (
    <div>
      <Navbar/>
      <Search/>
      <LoginSignup/>
      <Footer/>
    </div>
  );
}

export default PageLoginSignup;