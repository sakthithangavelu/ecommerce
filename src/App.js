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
import Error from "./errorpage/Error";
import ProtectedRoute from "./pages/Protected";
import SingleProduct from "./components/detailsPage/SingleProduct";
import DetailsLayout from "./components/detailsPage/DetailsLayout";
import { ToastContainer } from "react-toastify";
import AddUser from './adminPages/AddUser';
import AdminHome from './adminPages/AdminHome';
import EditUser from './adminPages/EditUser';
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/CartApp" element={<ProtectedRoute><CartApp /></ProtectedRoute>} />
      <Route path="/Cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/Checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/ViewOrders" element={<ProtectedRoute><ViewOrders /></ProtectedRoute>} />
      <Route path="/ShopNow" element={<ShopNow />} />
      <Route path="products" element={<DetailsLayout />}>
      <Route path=":productId" element={<SingleProduct />} /></Route>
      <Route path="/AdminHome" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
      <Route path="/AddUser" element={<ProtectedRoute><AddUser /></ProtectedRoute>} />
      <Route path="/EditUser/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>

  );
};

export default App;
