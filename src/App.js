import './App.css';
import React from 'react'
import Home from './Pages/Home';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
 
  )
}

export default App







    // <div>
    //       {/* <Home/>   */}
    //       {/* <Register/> */}
    //       {/* <SignIn/> */}
    //       {/* <ProductList/> */}
    //       {/* <Product/> */}
    //       {/* <Cart/> */}
    // </div> 