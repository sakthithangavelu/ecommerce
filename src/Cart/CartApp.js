import React, { useState, useEffect } from 'react';
import Main from './Main';
import Cart from './Cart';
import data from './data';
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';
import ecommerceUrl from '../Axios/AxiosURL';

function CartApp() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const email = sessionStorage.getItem("email");
    ecommerceUrl.get("CartItems?email=" + email).then((res) => {
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
    ecommerceUrl.post("CartItems", { ...product, email })

  }


  const onRemove = (product) => {

    ecommerceUrl.delete("CartItems/" + product.id).then((resp) => {
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