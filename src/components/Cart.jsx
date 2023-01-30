import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";

const Container = styled.aside`
  background-color: #c6f7ed;
  padding: 10px;
  margin: 0.5rem;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 1.5rem;
`;
const Items = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 18px;
  justify-content: space-between;
`;

const Text = styled.div`
  flex: 1;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  flex: 1;
  justify-content: space-between;
  text-align: right;
`;
const Price = styled.div``;
const Hr = styled.hr``;

const Button = styled.button`
  background-color: teal;
  width: 1.5rem;
  color: white;
`;
const CButton = styled.button`
  background-color: teal;
  color: white;
  padding: 10px;
  cursor: pointer;
  width: 7.5rem;
`;

const Cart = (props) => {
  // const { cartItems, onAdd, onRemove } = props;
  const { cartItems, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price, 0);
  const taxPrice = itemsPrice * 0.18;
  const shippingPrice = itemsPrice > 9999 ? 0 : 300;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <Container>
      <Title>CART ITEMS</Title>
      <Items>{cartItems.length === 0 && <Items>Cart Is Empty</Items>}</Items>
      {cartItems.map((item) => (
        <Wrapper key={item.id}>
          <Text>{item.name}</Text>
          <Text>
            {/* <Button onClick={() => onAdd(item)}>  +  </Button> */}
            <Button onClick={() => onRemove(item)}> - </Button>
            
          </Text>
          <TextWrapper>Rs.{item.price.toFixed(2)}</TextWrapper>
        </Wrapper>
      ))}
      {cartItems.length !== 0 && (
        <Items>
          <Wrapper>
            <Text>Items Price -</Text>
            <Price>Rs.{itemsPrice.toFixed(2)}</Price>
          </Wrapper>
          <Wrapper>
            <Text>Tax Price -</Text>
            <Price>Rs.{taxPrice.toFixed(2)}</Price>
          </Wrapper>
          <Wrapper>
            <Text>Shipping Price -</Text>
            <Price>Rs.{shippingPrice.toFixed(2)}</Price>
          </Wrapper>
          <Hr />
          <Wrapper>
            <Text>
              <strong>Total Price:</strong>
            </Text>
            <Price>Rs.{totalPrice.toFixed(2)}</Price>
          </Wrapper>
          <Hr />
          <Link to="/Checkout">
            <CButton>CHECKOUT</CButton>
          </Link>
        </Items>
        
      )}
      <ToastContainer/>
    </Container>
    
  );
};

export default Cart;
