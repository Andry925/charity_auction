import React from 'react'
import './Search.css'

import search from '../Assets/search.svg';
import filter from '../Assets/filter.svg'

const Search = () => {
  return (
    <div className="search-container">
        <div className='search-box'>
        <input type="text" className="search-box-text" placeholder='...Знайти лот' />
        <img src={search} alt="search" className='search' />
        </div>
        <div className='filter-box'>
            <img src={filter} alt="filter" className="filter" />
        </div>
    </div>
   
  )
}

export default Search;