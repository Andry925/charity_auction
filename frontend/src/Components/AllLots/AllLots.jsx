import React from 'react'
import { useState } from 'react'
import './AllLots.css'

const AllLots = () => {
    const[price, setPrice] = useState('')
    const[descr, setDescr] = useState('')
    
  return (
    <div className="al-lots-container">
        <div className='last-lots'>
                <div className="lot-home">
                    <div className="lot-home-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-home-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-home-price">
                        <p>{price} грн</p>
                    </div>
                </div>
                <div className="lot-home">
                    <div className="lot-home-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-home-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-home-price">
                        <p>{price} грн</p>
                    </div>
                </div>
                <div className="lot-home">
                    <div className="lot-home-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-home-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-home-price">
                        <p>{price} грн</p>
                    </div>
                </div>
                <div className="lot-home">
                    <div className="lot-home-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-home-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-home-price">
                        <p>{price} грн</p>
                    </div>
                </div>
                <div className="lot-home">
                    <div className="lot-home-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-home-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-home-price">
                        <p>{price} грн</p>
                    </div>
                </div>
                <div className="lot-home">
                    <div className="lot-home-photo">
                        {/* <img src="api-photo" alt="lot" /> */}
                    </div>
                    <div className='lot-home-descr'>
                        <p>{descr}</p>
                    </div>
                    <div className="lot-home-price">
                        <p>{price} грн</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AllLots;