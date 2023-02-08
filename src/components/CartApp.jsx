import React, { useState, useEffect } from "react";
import Main from "./Main";
import Cart from "./Cart";
import data from "./data";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ecommerceUrl from "../services/AxiosURL";
import styled from "styled-components";
import { showRemoveMessage, showToastMessage } from "../services/Toastify";

const Container = styled.div`
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 18px;
  justify-content: space-between;
`;

const CartApp = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    console.log(email);
    ecommerceUrl.get("CartItems?email=" + email).then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    const email = sessionStorage.getItem("email");
    ecommerceUrl.post("CartItems", { ...product, email, qty: 1 });
    showToastMessage();
  };

  // const onRem = (product)=> {
  //   const exist = cartItems.find((x)=> x.id === product.id);
  //   if(exist.qty===1) {
  //     setCartItems(cartItems.filter((x)=>x.id !==product.id));
  //   }else{
  //     setCartItems(
  //       cartItems.map((x) =>
  //        x.id===product.id ? {...exist,qty: exist.qty -1}:x
  //       ));

  //   }
  // }

  const onRemove = (product) => {
    ecommerceUrl.put("CartItems/" + product.id).then((resp) => {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      showRemoveMessage();
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar countCartItems={cartItems.length} />
      <Wrapper>
        <Main onAdd={onAdd} products={products}></Main>
        <Cart
          onAdd={onAdd}
          // onRem={onRem}
          onRemove={onRemove}
          cartItems={cartItems}
          countCartItems={cartItems.length}
        ></Cart>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default CartApp;
