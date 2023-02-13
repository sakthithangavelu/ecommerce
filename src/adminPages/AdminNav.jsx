import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
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


const AdminNav = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left></Left>
          <Center>
            <Logo>BrOwN WoOdS</Logo>
          </Center>
          <Right>
            <Link to="/SignIn">
              <MenuItem>SIGN OUT</MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminNav;
