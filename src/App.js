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
import Error from "./components/errorpage/Error";
import Protected from "./pages/Protected";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/CartApp" element={<Protected><CartApp /></Protected>}/>
      <Route path="/Cart" element={<Protected><Cart /></Protected>} />
      <Route path="/Checkout" element={<Protected><Checkout /></Protected>} />
      <Route path="/ViewOrders" element={<Protected><ViewOrders /></Protected>} />
      <Route path="/ShopNow" element={<ShopNow />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
