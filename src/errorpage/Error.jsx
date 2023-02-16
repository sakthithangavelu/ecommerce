import React from "react";
import styled from "styled-components";
import ErrorGif from "./error.gif";

const Container = styled.div`
  padding: 40px 0;
  background: #fff;
  text-align: center;
`;
const ImageContainer = styled.img`
  height: 30rem;
`;
const Content = styled.h3``;
const Para = styled.p``;
const Link = styled.a`
  color:teal;
`;

const Error = () => {
  return (
    <Container>
      <ImageContainer src={ErrorGif} alt="img" />
      <Content>
        <Para >Look like you're lost.</Para>
        <Para>the page you are looking for is not avaible!</Para>
        <Link href="/">Back to Home</Link>
      </Content>
    </Container>
  );
};

export default Error;
