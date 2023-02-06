import React from "react";
import Product from "./Product";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import products from "../components/detailsPage/Details";

const Container = styled.div`
  background-color: #c6f7ed;
  padding: 10px;
  margin: 0.5rem;
  flex: 1;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 18px;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;
const Article = styled.article``;

const Main = (props) => {
  const { products, onAdd } = props;
  return (
    <Container>
      <Title>FURNITURES</Title>
      <Wrapper>
        {/* {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))} */}
        {products.map((product) => {
          return (
            <Article key={product.id}>
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></Product>
            </Article>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Main;
