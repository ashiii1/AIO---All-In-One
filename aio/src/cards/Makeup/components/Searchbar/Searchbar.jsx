import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../../Context';
import './Searchbar.css'
import { useMediaQuery } from "react-responsive";

const Searchbar = () => {
  const { state } = useContext(StateContext);
  const [searchResults, setSearchResults] = useState([]);
  const [searchWord, setsearchWord] = useState('');
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setsearchWord(e.target.value);
    const filteredData = state.products.filter(prd => { return prd.name.toLowerCase().includes(searchWord.toLowerCase()) })
    setSearchResults(filteredData)
  }

  const openProductPage = (id) => {
    navigate(`/product/${id}`)
    setSearchResults([])
    setsearchWord('')
  }

  return (
    <>
     {
      isMobile ? <>
       <div className="searchbar-container-mb">
        <label className="searchbar">
          <span><i class="fa fa-search"></i></span>
          <input type="text" class="search-input" value={searchWord} placeholder="Search on Naaricare.." onChange={handleChange} />
          {searchResults.length !== 0 && <> <div className='searchResults-container'>
            {searchResults.map(prd => <p className="searchItem" onClick={() => openProductPage(prd._id)}>{prd.name}</p>)}
          </div></>}
        </label>
      </div></>:<> <div className="searchbar-container">
      <label className="searchbar">
        <span><i class="fa fa-search"></i></span>
        <input type="text" class="search-input" value={searchWord} placeholder="Search on Naaricare.." onChange={handleChange} />
        {searchResults.length !== 0 && <> <div className='searchResults-container'>
          {searchResults.map(prd => <p className="searchItem" onClick={() => openProductPage(prd._id)}>{prd.name}</p>)}
        </div></>}
      </label>
    </div></>
     }
    </>
  )
}

export { Searchbar }