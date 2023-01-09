import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";


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

const Product = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>

        <Wrapper>

          <ImgContainer>
              <Image src="https://www.ulcdn.net/images/products/357382/product/Friso_Coffee_Table_Set_Velvet_Cream_LP.jpg?1626927977"/>
          </ImgContainer>

          <InfoContainer>
            <Title>Coffee Table</Title>
            <Desc>Blane Square Solid Wood Coffee Table In Teak Finish</Desc>
            <Price>Rs.4,000/-</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Furniture Type</FilterTitle>
                <FilterType></FilterType>
              </Filter>
            </FilterContainer>
          </InfoContainer>

        </Wrapper>

      <Footer/>
    </Container>
  )
}

export default Product