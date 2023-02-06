import { useNavigate, useParams } from "react-router-dom";
import products from "./Details";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: #c6f7ed;
  padding: 10px;
  margin: 0.5rem;
  flex: 1;
  /* justify-content: space-between; */
`;
const Button = styled.button`
  font-size: 0.8rem;
  padding: 0.2rem;
  margin: 0.1rem;
  border: 0.1rem #404040 solid;
  background-color: teal;
  color: white;
  width: 10%;
  cursor: pointer;
`;
const Image = styled.img``;
const Title = styled.h3`
  text-align: center;
`;
const Desc = styled.h5`
  text-align: center;
`;
const Price = styled.h4`
  text-align: center;
`;

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, price,desc } = product;
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={image} alt={name} />
      <Title>{name}</Title>
      <Desc>{desc}</Desc>
      <Price>Price : Rs. {price}/-</Price>
      <Button onClick={() => navigate(-1)}>BACK</Button>
    </Container>
  );


};

export default SingleProduct;
