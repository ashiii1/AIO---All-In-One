import React, { useState } from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div className=''>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <AppDownload />
    </div>
  )
}

export default Home