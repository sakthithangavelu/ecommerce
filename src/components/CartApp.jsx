import React, { useState, useEffect } from "react";
import Main from "./Main";
import Cart from "./Cart";
import data from "./data";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ecommerceUrl from "../axios/AxiosURL";
import styled from "styled-components";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
    ecommerceUrl.get("CartItems?email=" + email).then((res) => {
      setCartItems(res.data);
    });
  }, []);



  const showToastMessage = () => {
    toast.success('Added successfully', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const showErrorMessage = () => {
    toast.error('Removed succesfully', {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist } : x))
      );
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
    const email = sessionStorage.getItem("email");
    ecommerceUrl.post("CartItems", { ...product, email });
    showToastMessage();

  };

  const onRemove = (product) => {
    ecommerceUrl.delete("CartItems/" + product.id).then((resp) => {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      showErrorMessage();
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
