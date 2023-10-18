import React from 'react'
import Banner from '../components/Banner'
import BestsellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

export default function Home() {
  return (
    <div>
        
        <Banner/>
        <BestsellerBooks/>
        <FavBook/>
        <PromoBanner/>
        <OtherBooks/>
        <Review/>
    </div>
  )
}
