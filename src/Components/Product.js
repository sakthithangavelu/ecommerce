import styled from "styled-components"
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@mui/icons-material"


const Info = styled.div`
        opacity:0;
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        background-color:rgba(0,0,0,0.2);
        z-index:3;
        display: flex;
        align-items:center;
        justify-content:center;
        transition:all 0.5s ease;
        cursor: pointer;
`;

const Container = styled.div`
        flex: 1;
        margin: 5px;
        display: flex;
        align-items=center;
        justify-content:center;
        background-color:teal;
        position: relative;
        padding-top:70px;

        &:hover ${Info}{
          opacity: 1;
        }
`;
const Circle = styled.div`
        width:200px;
        height: 200px;
        border-radius:50%;
        background-color: blue;
        position:absolute;
`;  
const Image = styled.img`
        height: 75%;
        z-index:2;
`;

const Icon = styled.div`
        width: 40px;
        height: 40px;
        border-radius:50% ;
        background-color:white ;
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 10px;
        transition:all 0.5s ease;//for animation

        &:hover{
          background-color:9df2e1;
          transform:scale(1.2);//for animation
        }
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product