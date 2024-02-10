import React from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from 'axios'
import envelope from "../Assets/envelope.svg"
import lock from "../Assets/lock.svg"

axios.defaults.withCredentials = true

const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/login", {
        email,
        password,
      }, { withCredentials: true });

      if (response.status === 200 || response.status === 201) {
        setCurrentUser(true);

        window.location.href = 'home-acc';
      }
    } catch (error) {
      console.error("Such user does not exist", error);
    }
  }

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Увійти</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={envelope} alt="email"/>
          <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input">
          <img src={lock} alt="lock"/>
          <input type="password" placeholder='Пароль' onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>Увійти</button>
      </div>
    </div>
  );
}

export default Login;