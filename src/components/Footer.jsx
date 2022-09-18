import { Email, Facebook, Instagram, Payment, Phone, Pinterest, Room, WhatsApp } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
`;
const Left = styled.div`
flex:1 ;
display:flex;
flex-direction: column;
padding:20px;
`;

const Logo = styled.div``;
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
color:white;
background-color: #${props => props.color};
display:flex;
align-items:center;
justify-content:Center;
margin-Right:20px;
`;

const Center = styled.div`
flex:1 ;
padding:20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex:1 ;
padding:20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LOGO_MJ</Logo>
                <Desc> Newsletter
                    Get timely Updates from your favourite productsNewsletter
                    Get timely Updates from your favourite products</Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Pinterest />
                    </SocialIcon>
                    <SocialIcon color='07e118'>
                        <WhatsApp />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>terms & Cond</ListItem>

                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{marginRight:"10px"}} />   12/1 Elephant Road , Dhaka </ContactItem>
                <ContactItem> <Phone style={{marginRight:"10px"}} />  +88 01753-258523</ContactItem>
                <ContactItem> <Email style={{marginRight:"10px"}} /> textmemj@gmail.com  </ContactItem>
                <Payment />




            </Right>

        </Container>

    )
}

export default Footer
