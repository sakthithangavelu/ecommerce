import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar/><br/>
      <Slider />
      <Categories/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home