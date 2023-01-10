import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div`
`;
const Wrapper = styled.div`
        padding:20px;
`;
const Title = styled.h1`
        font-weight:300;
        text-align:center;
`;
const Top = styled.div`
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding: 20px;
`;
const TopButton = styled.button`
        padding: 10px;
        font-weight:600;
        cursor:pointer;
        border: ${props => props.type === "filled" && "none"};
        background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
        color: ${props => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
`;
const TopText = styled.span`
        text-decoration:underline;
        cursor:pointer;
        margin:0px 10px;
`;

const Bottom = styled.div`
        display: flex;
        justify-content:space-between;
`;
const Info = styled.div`
        flex: 3;
`;
const Product = styled.div`
        display: flex;
        justify-content:space-between;
`;
const ProductDetail = styled.div`
        flex:2;
        display: flex;
`;
const Image = styled.img`
        width: 150px;
`;
const Details = styled.div`
        padding: 20px;
        display: flex;
        flex-direction:column;
        justify-content:space-around;
`;
const ProductName = styled.span`
`;
const ProductId = styled.span`
`;
const PriceDetail = styled.div`
        flex: 1;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
`;
const ProductAmountContainer = styled.div`
        display: flex;
        align-items:center;
        margin-bottom:20px ;
`;
const ProductAmount = styled.span`
        font-size:24px;
        margin:5px;
`;

const ProductPrice = styled.span`
        font-size:30px;
        
`;

const Hr = styled.hr`
        background-color: teal ;
        border: none;
        height:1px;
`;

const ProductType = styled.span`
`;



const Summary = styled.div`
        flex: 1;    
        border: 0.5px solid teal;
        border-radius:10px;
        padding:20px;
        
`;
const SummaryTitle = styled.h1`
        font-weight: 200;
`;
const SummaryItem = styled.div`
        margin: 30px 0px;
        display: flex;
        justify-content:space-between;
        font-weight:${props =>props.type ==="total" && "500"};
        font-weight:${props =>props.type ==="total" && "24px"};

`;
const SummaryItemText = styled.span`
        flex: 1;    
`;
const SummaryItemPrice = styled.span`
        flex: 1;    
`;
const Button = styled.button`
        width: 100%;
        padding: 10px;
        background-color:teal ;
        color:white;

`;

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Whishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Check Out</TopButton>
                </Top>
                <Bottom>
                    <Info>

                        <Product>
                            <ProductDetail>
                                <Image src="https://www.ulcdn.net/images/products/201632/product/Larsson_Study_Table_TK_00_LP.jpg?1533033869" />
                                <Details>
                                    <ProductName><b>Product:</b>Study Table</ProductName>
                                    <ProductId><b>ID:</b>41</ProductId>
                                    <ProductType><b>Furniture Type:</b>Home Furnitures</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>Rs.6,999/-</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.ulcdn.net/images/products/488392/product/VALTSL86BA12254_LP.jpg?1649155282" />
                                <Details>
                                    <ProductName><b>Product:</b>Study Lamp</ProductName>
                                    <ProductId><b>ID:</b>61</ProductId>
                                    <ProductType><b>Furniture Type:</b>Home Furnitures</ProductType>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>Rs.3,999/-</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rs.10998</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Check Out</Button>
                    </Summary>

                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart