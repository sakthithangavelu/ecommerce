import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Cart from './Cart';
import data from './data';
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'

function CartApp() {
  const {products} = data;
  const [cartItems,setCartItems] = useState([]);
  const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist){
        setCartItems(
          cartItems.map((x) =>
           x.id===product.id ? {...exist,qty: exist.qty +1}:x
          ));
      }else{
        setCartItems([...cartItems,{ ...product,qty:1}])
      }
  }

  const onRemove = (product)=> {
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty===1) {
      setCartItems(cartItems.filter((x)=>x.id !==product.id));
    }else{
      setCartItems(
        cartItems.map((x) =>
         x.id===product.id ? {...exist,qty: exist.qty -1}:x
        ));

    }
  }
  return (
   <div className='App'>
       <Announcement/>
       <Header countCartItems={cartItems.length}></Header>
       <div className='row'>
        <Main onAdd={onAdd} products={products}></Main>
        <Cart onAdd={onAdd}  onRemove={onRemove} cartItems={cartItems}></Cart>
        <Footer/>
      </div>
   </div>

  );
}

export default CartApp;