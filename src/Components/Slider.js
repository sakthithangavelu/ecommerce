import { ArrowLeftOutlined, ArrowRightOutlined} from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import image1 from './Images/image1.jpg'

const Container = styled.div`
        width:100%;
        height: 100vh;
        display:flex;
        position: relative;
        overflow:hidden;

`;
const Arrow = styled.div`
        width:50px;
        height: 50px;
        background-color:teal;
        border-radius: 50%;
        display: flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        top:0;
        bottom:0;
        left: ${props => props.direction === "left" && "10px"};   //passing props in styled components for left arrow using conditional rendering short circuit operator
        right: ${props => props.direction === "right" && "10px"}; //passing props in styled components for right arrow using conditional rendering short circuit operator
        margin:auto;
        cursor:pointer;
        opacity:0.6;
`;
const Wrapper = styled.div`
        height : 100%;
        display: flex;
        transform:translateX(-200px)

`;
const Slide = styled.div`
        width:100vw ;
        height:100vh ;
        display: flex;
        align-items:center;
        background-color: #${props=> props.bg} ;
`;
const ImgContainer = styled.div`
        height: 84%;
        flex:1;
`;
const InfoContainer = styled.div`
        padding: 50px;
        flex:1;
`;
const Image = styled.img`
        width:800px;
        height:80%;       
`;
const Title = styled.h1`
        font-size : 70px
`;
const Desc = styled.p`
        margin: 50px 0px;
        font-size: 20px;
        font-weight:500;
        letter-spacing:2px;
`;
const Button = styled.button`
        padding: 10px;
        font-size:20px;
        background-color:transparent ;
        cursor:pointer;
`;


const Slider = () => {

        const handleClick = (direction) => {}
    return (
        <Container>
            {/* passing props in styled components */}

            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

               <Wrapper>

                 <Slide bg="f5fafd">
                    <ImgContainer>
                         <Image src={image1}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Festive Sale 2023...!!</Title>
                        <Desc>We specialize in the manufacture of household furniture,outdoor and office furniture.We use the very best materials available including teak woods.</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    </Slide>

                    <Slide bg="fcf1ed">
                    <ImgContainer>
                         <Image src={image1}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Household Furnitures ...!!!!!</Title>
                        <Desc>We specialize in the manufacture of household furniture,outdoor and office furniture.We use the very best materials available including teak woods.</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    </Slide>
                    

                    <Slide bg="fbf0f4">
                    <ImgContainer>
                         <Image src={image1}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Office Furnitures...!!</Title>
                        <Desc>We specialize in the manufacture of household furniture,outdoor and office furniture.We use the very best materials available including teak woods.</Desc>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    </Slide>
               </Wrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}
export default Slider
