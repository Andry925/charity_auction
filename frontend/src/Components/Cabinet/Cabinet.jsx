import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Cabinet.css";

const Cabinet = () => {
    const [lots, setLots] = useState([
        { id: 1, price: '', descr: '' },
        { id: 2, price: '', descr: '' },
        { id: 3, price: '', descr: '' }
    ]);

    useEffect(() => {
        // Отримуємо редагований лот з localStorage
        const editedLot = JSON.parse(localStorage.getItem('editedLot'));
        if (editedLot) {
            // Оновлюємо стан лотів, замінюючи редагований лот за його id
            setLots(prevLots => {
                return prevLots.map(lot => {
                    if (lot.id === editedLot.id) {
                        return editedLot;
                    }
                    return lot;
                });
            });
        }
    }, []);

    const handleEdit = (id) => {
        const editedLot = lots.find(lot => lot.id === id);
        localStorage.setItem('editedLot', JSON.stringify(editedLot));
    };

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
                    <div className='lot-edit'>
                        {lots.map((lot) => (
                            <div key={lot.id} className='lot'>
                                <div className="lot-photo">
                                </div>
                                <div className='lot-descr'>
                                    <p>{lot.descr}</p>
                                </div>
                                <div className="lot-price">
                                    <p>{lot.price} грн</p>
                                </div>
                                <Link to="/edit" className="edit-button-cabinet">
                                    <button className='edit' onClick={() => handleEdit(lot.id)}>Редагувати</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='logout'>
                <a href='/home' className='submit'>
                    <div className="submit">
                        Вийти
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Cabinet;