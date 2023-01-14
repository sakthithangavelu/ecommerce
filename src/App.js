import './App.css';
import React from 'react'
import Home from './Pages/Home';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
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
        <Route path='/Product' element={<Product/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
        <Route path='/Cart' element={<Cart/>}/>
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