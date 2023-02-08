import React from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ecommerceUrl from "../services/AxiosURL";
import styled from "styled-components";
import { showOrderFailed, showOrderSuccess } from "../services/Toastify";

const Container = styled.div`
  width: 99.2vw;
  height: 100vh;
  background: url("/assets/images/register.jpg") center;
  display: flex;
  background-size: cover;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 3000;
`;
const Cod = styled.h4``;
const Form = styled.form``;
const Input = styled.input`
  flex: 1;
  min-width: 92%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 99%;
  padding: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Checkout = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [address1, address1Change] = useState("");
  const [address2, address2Change] = useState("");
  const [postcode, postcodeChange] = useState("");
  const [phone, phoneChange] = useState("");

  const navigate = useNavigate();

  const PlaceOrder = (e) => {
    let checkoutObject = { name, email, address1, address2, postcode, phone };
    console.log(checkoutObject);
    e.preventDefault();
    ecommerceUrl
      .post("UserAddress", checkoutObject)
      .then((res) => {
        navigate("/ViewOrders");
        showOrderSuccess();
      })
      .catch(() => {
        showOrderFailed();
      });
  };
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Form onSubmit={PlaceOrder}>
            <Title>Address to deliver</Title>
            <Input
              type="text"
              value={name}
              onChange={(e) => nameChange(e.target.value)}
              placeholder="Name"
              required
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => emailChange(e.target.value)}
              placeholder="*Registered Email ID*"
              required
            />
            <Input
              type="text"
              value={address1}
              onChange={(e) => address1Change(e.target.value)}
              placeholder="House number and street name"
              required
            />
            <Input
              type="text"
              value={address2}
              onChange={(e) => address2Change(e.target.value)}
              placeholder="City, State, Country"
              required
            />
            <Input
              type="number"
              value={postcode}
              onChange={(e) => postcodeChange(e.target.value)}
              placeholder="Postcode"
              required
            />
            <Input
              type="tel"
              value={phone}
              onChange={(e) => phoneChange(e.target.value)}
              placeholder="Mobile number"
              required
            />
            <Cod>*Cash on delivery only available..!</Cod>
            <Button type="submit">Place Order</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Checkout;
