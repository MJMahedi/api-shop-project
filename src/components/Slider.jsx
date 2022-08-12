import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import  { Component } from 'react';

import styled from 'styled-components'
import { style } from '@mui/system';

const Container = styled.div`
  width: 100%;
  height:100vh;
  display:flex;
  background-color:coral;
  position:relative;
`;
const Arrow = styled.div`
width:50px;
height:50px;
background-color:white;
border-radius: 50% ;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=> props.direction === "left" && "10px"};
right:${props=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
`;

const Wrapper = styled.div`
height:100%;
`;

const Slide = styled.div`
display:flex;
align-items:center;
`;
const ImageContainer = styled.div`
flex: 1;
`;
const InfoContainer = styled.div`
flex: 1;
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
        <FontAwesomeIcon icon={faAnglesLeft} />
        </Arrow>
        <Wrapper>
        <ImageContainer>
        <img src="https://i.ibb.co/z27wdSs/Capture.png" alt="12" border="0" />
        
        </ImageContainer>
        <InfoContainer></InfoContainer>

        </Wrapper>
        <Arrow direction="right">
        <FontAwesomeIcon icon={faAnglesRight} />
        
        </Arrow>
    </Container>
  )
}

export default Slider
