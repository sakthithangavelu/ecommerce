import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: teal;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) =>
                props.direction === "left" &&
                "10px"}; //passing props in styled components for left arrow using conditional rendering short circuit operator
  right: ${(props) =>
                props.direction === "right" &&
                "10px"}; //passing props in styled components for right arrow using conditional rendering short circuit operator
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 1; //The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(
    ${(props) => props.slideIndex * -100}vw
  ); //The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 84%;
  flex: 1;
`;
const InfoContainer = styled.div`
  padding: 50px;
  margin-bottom: 100px;
  flex: 1;
`;
const Image = styled.img`
  width: 800px;
  height: 80%;
`;
const Title = styled.h1`
  font-size: 60px;
  margin: 10px;
  margin-bottom: 10px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  font-size: 18px;
  padding: 20px;
  text-align: center;
  align-items: center;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: flex;
  margin: auto;
`;

const Slider = () => {
        const [slideIndex, setSlideIndex] = useState(0);
        //Setting direction for the arrows
        const handleClick = (direction) => {
                if (direction === "left") {
                        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
                } else {
                        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
                }
        };
        return (
                <Container>
                        {/* passing props in styled components */}
                        <Arrow direction="left" onClick={() => handleClick("left")}>
                                <ArrowLeftOutlined />
                        </Arrow>

                        <Wrapper slideIndex={slideIndex}>
                                {sliderItems.map((item) => (
                                        <Slide bg={item.bg} key={item.id}>
                                                <ImgContainer>
                                                        <Image src={item.img} />
                                                </ImgContainer>
                                                <InfoContainer>
                                                        <Title>{item.title}</Title>
                                                        <Desc>{item.desc}</Desc>
                                                        <Link to="/ShopNow">
                                                                {" "}
                        
                                                                <Button>Shop Now</Button>
                                                        </Link>
                                                </InfoContainer>
                                        </Slide>
                                ))}
                        </Wrapper>
                        
                        <Arrow direction="right" onClick={() => handleClick("right")}>
                                <ArrowRightOutlined />
                        </Arrow>
                </Container>
        );
};
export default Slider;
