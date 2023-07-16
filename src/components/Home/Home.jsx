import React from 'react'
import "./Home.css"
import VarietyCard from '../VarietyCard/VarietyCard'
import Popularproducts from './PopularProducts/Popularproducts'
import DailyBestSales from './DailyBestSales/DailyBestSales'
import Newletter from './Newletter/Newletter'
import Features from './Features/Features'
import Banner from "./Banner/Banner"

function Home() {
  return (
    <div>
      <Banner/>
       <VarietyCard/>
       <Popularproducts/>
       <DailyBestSales/>
       <Newletter/>
       <Features/>
    </div>
  )
}

export default Home