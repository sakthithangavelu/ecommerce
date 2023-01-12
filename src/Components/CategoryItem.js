import styled from "styled-components"
import Categories from "./Categories";


const Container = styled.div`
        flex: 1;
        margin: 3px;
        height: 70vh;
        position: relative; //position: relative places an element relative to its current position without changing the layout around it
`;
const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit:cover;
`;
const Info = styled.div`
position: absolute; //position: absolute places an element relative to its parent's position and changing the layout around it.
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction:column;
align-items:center;
justify-content : center;
`;
const Title = styled.h1`
color: white;
margin-bottom:20px;
`;
const Button = styled.button`
        border:none;
        padding: 10px;
        background-color:white;
        color: gray;
        cursor: pointer;
        font-weight:600;
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
            {/* <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info> */}
    </Container>
  )
}

export default CategoryItem