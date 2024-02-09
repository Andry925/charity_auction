import React, { useState } from 'react';
import './Search.css';

import search from '../Assets/search.svg';
import filter from '../Assets/filter.svg';

const Search = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        category: '',
        price: '',
    });

    const handleApplyFilters = () => {
        setIsFilterOpen(false);
    };

    const handleSearch = () => {

    };

    const [value, setValue] = useState(1);

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="search-container">
            <div className="search-box">
                <input type="text" className="search-box-text" placeholder="...Знайти лот" />
                <img src={search} alt="search" className="search" />
            </div>
            <div className="filter-box" onClick={() => setIsFilterOpen(true)}>
                <img src={filter} alt="filter" className="filter" />
            </div>

            {isFilterOpen && (
                <div className="filter-window">
                    <div className="first-filter">
                        <div className="filter-categories-caption">
                            <p>Категорії</p>
                        </div>
                        <ul className="filter-categories">

                        </ul>
                    </div>

                    <div className="second-filter">
                        <div className="filter-price-caption">
                            <p>Ціна</p>
                        </div>
                        <div className="sliderPrice">
                            <p className="slider-price-value">
                                <span>{value}</span> грн
                            </p>
                            <input
                                type="range"
                                min="1"
                                max="99999"
                                value={value}
                                onChange={handleSliderChange}
                                className="slider"
                            />
                        </div>
                    </div>

                    <button className="use-filter" onClick={handleApplyFilters}>
                        Застосувати
                    </button>
                </div>
            )}

            <a href="" onClick={handleSearch}>
                <img src={search} alt="search" className="search" />
            </a>
        </div>
    );
};

export default Search;