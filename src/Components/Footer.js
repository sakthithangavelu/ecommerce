import styled from "styled-components"
import { Facebook, Twitter, Instagram,Place ,Call,Email} from "@mui/icons-material"


const Container = styled.div`
        display: flex;
`;
const Left = styled.div`
        flex: 1;
        display: flex;
        flex-direction:column;
        padding:20px;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
        margin:20px 0px;
`;
const SocialContainer = styled.div`
        display:flex;
`;
const SocialIcon = styled.div`
        width:40px;
        height:40px;
        border-radius:50%;
        display: flex;
        align-items:center;
        justify-content:center;
`;


const Center = styled.div`
        flex: 1;
        padding: 20px;
`;
const Title = styled.h3`
        margin-bottom:30px;
`;
const List = styled.ul`
        margin:0;
        padding: 0;
        list-style:none;
        display:flex;
        flex-wrap:wrap;
`;
const ListItem = styled.li`
        width: 50%;
        margin-bottom:10px;
`;


const Right = styled.div`
        flex: 1;
        padding:20px;
`;

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>BrOwN WoOdS</Logo>
                <Desc>We specialize in the manufacture of household furniture,outdoor and office furniture.We use the very best materials available including teak woods.</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                    <Title>Useful links</Title>
                    <List>
                         <ListItem>Home</ListItem>
                         <ListItem>Cart</ListItem>
                         <ListItem>Home Furnitures</ListItem>
                         <ListItem>Office Furnitures</ListItem>
                         <ListItem>Outdoor Furnitures</ListItem>
                         <ListItem>My Account</ListItem>
                         <ListItem>Order Tracking</ListItem>
                         <ListItem>Wishlist</ListItem>
                         <ListItem>Wishlist</ListItem>
                         <ListItem>Terms</ListItem>
                    </List>
            </Center>

            <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        {/* inline styling for a space between icon and text */}
                    <Place style={{marginRight:"10px"}}/>  No:291,2nd main road,Siruseri,Chennai - 600 130  
                    </ContactItem>
                    <ContactItem>
                    <Call style={{marginRight:"10px"}}/>+91 97654 78218
                    </ContactItem>
                    <ContactItem>
                    <Email style={{marginRight:"10px"}}/>reachus@brownwoods.com
                    </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer