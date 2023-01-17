import React, { useState, useEffect } from 'react';
import Main from './Main';
import Cart from './Cart';
import data from './data';
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import axios from 'axios';
import Navbar from '../Components/Navbar';

function CartApp() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    axios.get("http://localhost:8000/CartItems?email=" + email).then((res) => {
      setCartItems(res.data)
    });
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist } : x
        ));
    } else {
      setCartItems([...cartItems, { ...product }])
    }
    const email = sessionStorage.getItem("email");
    axios.post("http://localhost:8000/CartItems", { ...product, email })

  }


  const onRemove = (product) => {

    axios.delete("http://localhost:8000/CartItems/" + product.id).then((resp) => {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    });

  }
  return (
    <div className='App'>
      <Announcement />
      <Navbar countCartItems={cartItems.length} />
      <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={cartItems.length}></Cart>
        <Footer />
      </div>
    </div>

  );
}

export default CartApp;