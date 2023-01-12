import React from 'react'
import styled from 'styled-components'
import { Search,ShoppingCartOutlined } from "@mui/icons-material"
import { Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Container = styled.div`
        height: 60px;
` ;
const Wrapper = styled.div`
        padding: 1px 1px 1px 1px ;
        display: flex;
        align-items : center;
        justify-content: space-between;
        background-color:#e3e6e5;
`;
// Left Portion of Page
const Left = styled.div`
        flex : 1;
        display: flex;
        align-items : center;
`;
// const Language = styled.span`
//         font-size : 14px ;
//         cursor : pointer;
// `;
// const SearchContainer = styled.div`
//         border : 0.5px solid gray;
//         display: flex;
//         align-items : center;
//         margin-left: 25px;
//         padding: 10px;
// `;
// const Input = styled.input`
//         border: none;
// `;

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





const NavigationBar = () => {

const usenavigation = useNavigate();
  useEffect(() => {
                  let email=sessionStorage.getItem('email');
                  if(email==='' || email === null){
                        usenavigation('/SignIn');
                  }

                  },[]);
    return (
        <Container>
            <Wrapper>

                <Left>
                {/* <SearchContainer>
                <Language>SEARCH:</Language> 
                <Input/>
                    <Search style={{color:"gray",fontSize:15}}/>
                </SearchContainer > */}
                </Left>


                <Center>
                    <Logo>BrOwN WoOdS</Logo>
                </Center>
                

                <Right>
                
                    <Link to='/'><MenuItem>HOME</MenuItem></Link>
                    <Link to='/SignIn'><MenuItem>LOGOUT</MenuItem></Link>
                    <MenuItem>
                        <Badge badgeContent={0} color="primary">
                        <Link to='Cart'><ShoppingCartOutlined/></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavigationBar