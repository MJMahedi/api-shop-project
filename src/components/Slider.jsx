import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height:100vh;
  display:flex;
  background-color:coral;
`;
const Arrow = styled.div`
width:50px;
height:50px;
background-color:white;
border-radius: 50% ;
display:flex;
align-items:center;
justify-content:center;

`;

const Slider = () => {
  return (
    <Container>
        <Arrow>
        <FontAwesomeIcon icon={faAnglesLeft} />
        
        </Arrow>
        <Arrow>
        <FontAwesomeIcon icon={faAnglesRight} />
        
        </Arrow>
    </Container>
  )
}

export default Slider
