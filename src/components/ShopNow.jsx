import React, { useState } from "react";
import Main from "./Main";
import data from "./data";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 18px;
  justify-content: space-between;
`;

const showErrorMessage = () => {
  toast.info("Please Sign In to Proceed", {
    position: toast.POSITION.TOP_CENTER,
  });
};

const ShopNow = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist } : x))
      );
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
    showErrorMessage();
  };

  return (
    <Container>
      <Announcement />
      <Navbar countCartItems={""} />
      <Wrapper>
        <Main onAdd={onAdd} products={products}></Main>
        <ToastContainer />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default ShopNow;
