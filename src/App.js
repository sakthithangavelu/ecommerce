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
import ProtectedRoute from "./pages/Protected";
import SingleProduct from "./components/detailsPage/SingleProduct";
import DetailsLayout from "./components/detailsPage/DetailsLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/CartApp" element={<ProtectedRoute><CartApp /></ProtectedRoute>} />
      <Route path="/Cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/Checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/ViewOrders" element={<ProtectedRoute><ViewOrders /></ProtectedRoute>} />
      <Route path="/ShopNow" element={<ShopNow />} />
      <Route path="*" element={<Error />} />
      <Route path="products" element={<DetailsLayout />}>
      <Route path=":productId" element={<SingleProduct />} /></Route>
    </Routes>
  );
};

export default App;
