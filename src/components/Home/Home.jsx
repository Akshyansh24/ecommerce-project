import React from 'react'
import "./Home.css"
import VarietyCard from '../VarietyCard/VarietyCard'
import Popularproducts from './PopularProducts/Popularproducts'
import DailyBestSales from './DailyBestSales/DailyBestSales'
import Newletter from './Newletter/Newletter'
import Features from './Features/Features'

function Home() {
  return (
    <div>
       <VarietyCard/>
       <Popularproducts/>
       <DailyBestSales/>
       <Newletter/>
       <Features/>
    </div>
  )
}

export default Home