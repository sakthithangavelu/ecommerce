import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Cart from "./components/Cart";
import CartApp from "./components/CartApp";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import ViewOrders from "./components/ViewOrders";
import ShopNow from "./components/ShopNow";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/CartApp" element={<CartApp />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/ViewOrders" element={<ViewOrders />} />
      <Route path="/ShopNow" element={<ShopNow />} />
    </Routes>
  );
};

export default App;
