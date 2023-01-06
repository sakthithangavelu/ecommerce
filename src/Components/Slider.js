import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import image1 from './Images/image1.jpg'

const Container = styled.div`
        width:100%;
        height: 100vh;
        display:flex;
        position: relative;

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
`;
const Slide = styled.div`
        display: flex;
        align-items:center;
`;
const ImgContainer = styled.div`
        flex:1;
`;
const InfoContainer = styled.div`
        flex:1;
`;
const Image = styled.img`
        width:500px;
        height:500px;       
`;





const Slider = () => {
    return (
        <Container>
            {/* passing props in styled components */}

            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>

               <Wrapper>
                    <ImgContainer>
                         <Image src={image1}/>
                    </ImgContainer>
                    <InfoContainer>
                        
                    </InfoContainer>

               </Wrapper>

            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}
export default Slider
