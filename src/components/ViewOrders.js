import React, { useState, useEffect } from "react";
import Announcement from "./Announcement";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ecommerceUrl from "../axios/AxiosURL";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  background-color: #c6f7ed;
  background: url("/assets/images/register.jpg") center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 600px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  border-radius: 0 0 5px 5px;
  padding: 25px;
`;
const Image = styled.img`
  max-height: 10rem;
`;
const InfoContainer = styled.div``;
const P = styled.p`
  display: block;
  color: #888;
  margin: 0;
  padding-left: 25px;
`;
const AddressContainer = styled.div``;

const ViewOrders = () => {
    const [cartItems, setCartItems] = useState([]);
    const [userAddress, setUserAddress] = useState([]);

    const email = sessionStorage.getItem("email");
    useEffect(() => {
        ecommerceUrl.get("CartItems").then((res) => {
            ecommerceUrl.get("UserAddress").then((res) => {
                setUserAddress(res.data);
            });
            setCartItems(res.data);
        });
    }, []);

    const myCart = cartItems.filter((item) => {
        if (item.email === email) {
            return item;
        } else {
            return false;
        }
    });
    const myAddress = userAddress.filter((address) => {
        if (address.email === email) {
            return address;
        } else {
            return false;
        }
    });
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                {myCart.map((item) => (
                    <DetailsContainer>
                        <Image src={item.image} />
                        <InfoContainer>
                            <P>User Id :{item.email}</P>
                            <P>Product Price : Rs.{item.price}/-</P>
                            <P>Product name : {item.name}</P>
                            {myAddress.map((address) => (
                                <AddressContainer>
                                    <P>
                                        Address : {address.address1}
                                        {address.address2}
                                    </P>
                                    <P>Postcode : {address.postcode}</P>
                                    <P>Contact : {address.phone}</P>
                                </AddressContainer>
                            ))}
                        </InfoContainer>
                    </DetailsContainer>
                ))}
            </Wrapper>
            <Footer />
        </Container>
    );
};
export default ViewOrders;
