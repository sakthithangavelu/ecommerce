import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Products from "../Components/Products";

const Container = styled.div`
`;
const Title = styled.h1`
        margin:20px;
`;
const FilterContainer = styled.div`
        display:flex;
        justify-content:space-between;
`;
const Filter = styled.div`
        margin: 20px;
`;
const FilterText = styled.span`
        font-size:20px;
        font-weight:600;
        margin: 10px;
`;
const Select = styled.select`
        padding: 10px;
        margin: 10px;
`;
const Option = styled.option`
`;


const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Furnitures</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Fliter Products</FilterText>
                <Select><Option disabled selected>Furniture Type</Option>
                        <Option>Home Furnitures</Option>
                        <Option>Office furnitures</Option>
                        <Option>Outdoor furnitures</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option disabled selected>Price</Option>
                    <Option>Low to high</Option>
                    <Option>High to low</Option>
        
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
       
    </Container>
  )
}

export default ProductList