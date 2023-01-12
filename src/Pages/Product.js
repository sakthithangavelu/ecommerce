import styled from "styled-components"
import Navigationbar from "../Components/NavigationBar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import {Add,Remove} from "@mui/icons-material"


const Container = styled.div`
`;
const Wrapper = styled.div`
        padding: 50px;
        display: flex;
`;
const ImgContainer = styled.div`
        flex: 1;
`;
const Image = styled.img`
        width: 60%;

`;
const InfoContainer = styled.div`
        flex: 1;
     
`;
const Title = styled.h1`
        font-weight:200;
`;
const Desc = styled.p`
        margin: 20px 0px;;
`;
const Price = styled.span`
      font-weight:100;
      font-size:40px;
`;

const AddContainer = styled.div`
        display: flex;
        align-items:center;
        width:50%;
        justify-content:space-between;
`;
const AmountContainer= styled.div`
        display: flex;
        align-items:center;
        font-weight:700;
`;
const Amount = styled.span`
        width: 30px;
        height:30px;
        border-radius:10px;
        display: flex;
        align-items:center;
        justify-content:center;
        margin: 0px 5px;
        border: 2px solid teal;
        
`;
const Button = styled.button`
        padding: 15px;
        border: 2px solid teal;
        background-color: white;
        cursor:pointer;


        &:hover{
          background-color: teal;
          color: white;
        }
        
`;



const Product = () => {
  return (
    <Container>
      <Announcement/>
      <Navigationbar/>

        <Wrapper>

          <ImgContainer>
              <Image src="https://www.ulcdn.net/images/products/357382/product/Friso_Coffee_Table_Set_Velvet_Cream_LP.jpg?1626927977"/>
          </ImgContainer>

          <InfoContainer>
            <Title>Coffee Table</Title>
            <Desc>Blane Square Solid Wood Coffee Table In Teak Finish</Desc>
            <Price>Rs.4,000/-</Price>

            <AddContainer>
              <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>

        </Wrapper>

      <Footer/>
    </Container>
  )
}

export default Product