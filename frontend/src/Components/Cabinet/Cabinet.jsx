import React, { useState } from 'react'
import "./Cabinet.css"

const Cabinet = () => {
    const[price, setPrice] = useState('')
    const[descr, setDescr] = useState('')

  return (
    
    <div className='container'>
        <div className="header">
            <div className="text">Особистий кабінет</div>
            <div className="underline"></div>
        </div>
        <div className='account'>
            <div className='account-info'>
            <div className="info-caption">Акаунт</div>
                <div className="name-info">Ім'я</div>
                <div className="email-info">Email</div>
            </div>
            <div className='account-lots'>
                <div className="lot-caption">Мої аукціони</div>
                <div className="lot">
                    <div className="lot-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-price">
                        <p>{price} грн</p>
                    </div>
                </div>
                <div className="lot">
                    <div className="lot-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-price">
                        <p>{price} грн</p>
                    </div>
                </div>
                <div className="lot">
                    <div className="lot-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-price">
                        <p>{price} грн</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='logout'>
            <a href='/home' className='submit'>
                <div
                    className="submit">
                    Вийти
                </div>
            </a>
        </div>
    </div>
  )
}

export default Cabinet;