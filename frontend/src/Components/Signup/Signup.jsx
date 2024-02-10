import React from 'react'
import "./Signup.css"
import { useState } from 'react'
import axios from 'axios'
import user from "../Assets/user.svg"
import envelope from "../Assets/envelope.svg"
import lock from "../Assets/lock.svg"

axios.defaults.withCredentials = true


const Signup = ({setCurrentUser}) => {
    const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Registration = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/accounts/register", {
        email,
        username,
        password,
      }, { withCredentials: true })

      if (response.status === 201 || response.status === 200) {
        setCurrentUser(true)
      }
    } catch (error) {
      console.error("Failed registration", error)
    }
  }


  return (
    <div className='container'>
        <div className="header">
            <div className="text">Реєстрація</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user} alt="user"/>
                <input type="text" placeholder="Ім'я" onChange={(e) => setUsername(e.target.value)}/>
            </div>
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
        <div
          className="submit yellow"
          onClick={Registration}>Реєстрація
        </div>
        <div
          className="submit"
          onClick={() => {
          }}>Увійти
        </div>
      </div>
    </div>
  )
}

export default Signup;