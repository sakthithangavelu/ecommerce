import './App.css';
import React from 'react'
import Home from './Pages/Home';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import CartApp from './Cart/CartApp';
import { Routes, Route} from "react-router-dom";
import Cart from './Cart/Cart';

const App = () => {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/CartApp' element={<CartApp />} />
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
 
  )
}

export default App
