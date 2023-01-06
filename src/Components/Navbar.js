import React from 'react'
import styled from 'styled-components'
import { Search,ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from '@mui/material';
const Container = styled.div`
        height: 60px;
` ;
const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items : center;
        justify-content: space-between;
        /* border-top: 2px solid;
        border-bottom: 2px solid;
        padding: 10px; */
        background-color:#e3e6e5;
`;
//Left Portion of Page
const Left = styled.div`
        flex : 1;
        display: flex;
        align-items : center;
`;
const Language = styled.span`
        font-size : 14px ;
        cursor : pointer;
`;
const SearchContainer = styled.div`
        border : 0.5px solid gray;
        display: flex;
        align-items : center;
        margin-left: 25px;
        padding: 10px;
`;
const Input = styled.input`
        border: none;
`;

//Center Portion of Page
const Center = styled.div`
        flex : 1;
        text-align : center;
`;
const Logo = styled.h1`
        font-weight : bold;
`;

//Right Portion of Page
const Right = styled.div`
        flex : 1;
        display: flex;
        justify-content : flex-end;
        align-items : center;
`;
const MenuItem = styled.div`
        font-size: 14px ;
        cursor : pointer;
        margin-left:25px ;
`;





const Navbar = () => {
    return (
        <Container>
            <Wrapper>

                <Left><Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize:15}}/>
                </SearchContainer>
                </Left>


                <Center>
                    <Logo>ShopKart</Logo>
                </Center>


                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary">
                        <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar