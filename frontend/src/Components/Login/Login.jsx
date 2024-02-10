import React from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from 'axios'
import user from "../Assets/user.svg"
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
      }
    } catch (error) {
      console.error("Such user does not exist", error);
    }
  };
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {action === "Увійти" ? <div></div>:
                <div className="input">
                <img src={user} alt="user" />
                <input type="text" placeholder="Ім'я"/>
                </div>}
            <div className="input">
                <img src={envelope} alt="email" />
                <input type="email" placeholder='E-mail'/>
            </div>
            <div className="input">
                <img src={lock} alt="lock" />
                <input type="password" placeholder='Пароль'/>
            </div>
        </div>
        <div className="submit-container">
            <div className={action === "Увійти" ? "submit yellow" : "submit"} onClick={() => {setAction("Реєстрація")}}>Реєстрація</div>
            <div className={action === "Реєстрація" ? "submit yellow" : "submit"} onClick={() => {setAction("Увійти")}}>Увійти</div>
        </div>
    </div>
  )
}

export default Login;