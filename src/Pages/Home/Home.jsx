import React from 'react'
import Banner from './Banner'
import TopProducts from './TopProducts'
import DiscountCard from './DiscountCard'
import OrderTogether from './OrderTogether'
import OnSale from './OnSale'
import AboutUs from './AboutUs'


const Home = () => {
  return (
    <div>
         <Banner/>
         <TopProducts/>
         <DiscountCard/>
         <OrderTogether/>
         <OnSale/>
         <AboutUs/>
        
    </div>
  )
}

export default Home
