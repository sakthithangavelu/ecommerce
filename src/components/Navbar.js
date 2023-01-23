import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 25px;
`;
const Wrapper = styled.div`
  padding: 1px 1px 1px 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e3e6e5;
`;
// Left Portion of Page
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

//Center Portion of Page
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
//Right Portion of Page
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Button = styled.button`
  background-color: teal;
  border: none;
  color: white;
  width: 1.2rem;
  border-radius: 50%;
`;

const Navbar = (props) => {
    const auth = sessionStorage.getItem("email");
    const { countCartItems } = props;
    return (
        <div>
            {auth ? (
                <Container>
                    <Wrapper>
                        <Left>
                            <Link to="/CartApp">
                                <Badge
                                    badgeContent={
                                        countCartItems ? <Button>{countCartItems}</Button> : ""
                                    }
                                >
                                    <ShoppingCartOutlined />
                                </Badge>
                            </Link>
                        </Left>

                        <Center>
                            <Logo>BrOwN WoOdS</Logo>
                        </Center>

                        <Right>
                            <Link to="/">
                                <MenuItem>HOME</MenuItem>
                            </Link>
                            <Link to="/ViewOrders">
                                <MenuItem>MY ORDERS</MenuItem>
                            </Link>
                            <Link to="/SignIn">
                                <MenuItem>SIGN OUT</MenuItem>
                            </Link>
                        </Right>
                    </Wrapper>
                </Container>
            ) : (
                <Container>
                    <Wrapper>
                        <Left>
                            <Link to="/CartApp">
                                <Badge
                                    badgeContent={
                                        countCartItems ? <Button>{countCartItems}</Button> : " "
                                    }
                                >
                                    <ShoppingCartOutlined />
                                </Badge>
                            </Link>
                        </Left>

                        <Center>
                            <Logo>BrOwN WoOdS</Logo>
                        </Center>

                        <Right>
                            <Link to="/">
                                <MenuItem>HOME</MenuItem>
                            </Link>
                            <Link to="/Register">
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to="/SignIn">
                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </Right>
                    </Wrapper>
                </Container>
            )}
        </div>
    );
};

export default Navbar;
