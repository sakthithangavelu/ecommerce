import './App.css';
import React from 'react'
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Announcement from './Components/Announcement';
import Slider from './Components/Slider';
const App = () => {
  return (
    <div>
          <Announcement/>
          <Navbar/>
          <Slider/>
          
    </div>
          
  )
}

export default App
