import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import Cart from "./components/Cart";
import CartApp from "./components/CartApp";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import ViewOrders from "./components/ViewOrders";

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
    </Routes>
  );
};

export default App;
