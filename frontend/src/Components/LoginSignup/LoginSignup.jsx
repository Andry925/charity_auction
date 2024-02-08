import React from 'react'
import "./LoginSignup.css"
import { useState } from 'react'

import user from "../Assets/user.svg"
import envelope from "../Assets/envelope.svg"
import lock from "../Assets/lock.svg"


const LoginSignup = () => {
    const [action, setAction] = useState("Увійти");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {action === "Увійти" ? <div></div>:
                <div className="input">
                <img src={user} alt="User" />
                <input type="text" placeholder="Ім'я"/>
                </div>}
            <div className="input">
                <img src={envelope} alt="Email" />
                <input type="email" placeholder='E-mail'/>
            </div>
            <div className="input">
                <img src={lock} alt="Lock" />
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

export default LoginSignup