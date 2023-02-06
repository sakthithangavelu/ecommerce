import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
`;
const Price = styled.div``;
const Button = styled.button`
  font-size: 0.8rem;
  padding: 0.2rem;
  margin: 0.1rem;
  border: 0.1rem #404040 solid;
  background-color: teal;
  color: white;
  width: 100%;
  cursor: pointer;
`;
const Image = styled.img`
  max-height: 10rem;
`;

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <Container>
      <Title>{product.name}</Title>
      <Link to={`/Products/${product.id}`}><Image src={product.image} alt={product.name}></Image></Link>
      <Price>Rs.{product.price}</Price>
      <Button onClick={() => onAdd(product)}>ADD TO CART</Button>
    </Container>
  );
};

export default Product;
