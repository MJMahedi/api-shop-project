import React from 'react'
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass , faCartPlus , faEnvelope, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import Badge from 'react-bootstrap/Badge';



const Container = styled.div`
height: 90px;
background-color:orange;
`;

const Wrapper = styled.div`
padding: 10px 20px;
color:dark;
display:flex;
justify-content:space-between;
flex-wrap :wrap;
align-items:center;
`;
const SearchContainer = styled.div`
border:3px solid white;
display:flex;
justify-content: space-evenly;
align-items:Center;
margin-left: 15px;
padding: 5px;

`;
const Input = styled.input`
margin-Right: 7px;
border:none;
`;
const Left = styled.div`
display:flex;
align-items: center;
padding:20px;
flex:1;
`;
const Language = styled.span`
font-size:24px;
`;
const Center = styled.div` 
flex:1 ;
text-align:center;

`;
const Right = styled.div`
padding:20px;
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;

const Logo = styled.h1`
font-weight:bold;

`;
const MenuItem = styled.div`
font-size:18px;
cursor:pointer;
margin-left:25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <span>EN</span>
          </Language>
          
          <SearchContainer>
            <Input placeholder='Search '></Input>
            <FontAwesomeIcon style={{color:"gray" , fontSize:"16"}}
              icon={faMagnifyingGlass} />
              
          </SearchContainer>

        </Left>
        <Center>
        <Logo>LOGO</Logo>

        </Center>

        <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem>
        <FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon>
        </MenuItem>

        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar