import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import React,{ useState} from 'react';
import { Component } from 'react';
import { sliderItems } from '../data';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'
import { style } from '@mui/system';
import Button from 'react-bootstrap/Button';


const Slider = () => {
  const [sliderIndex , setSliderIndex] = useState(0);



  return (
    <Carousel fade>
    {sliderItems.map((item) => (
      <Carousel.Item  >
     
     <img
       className="d-block w-100" style={{height: '320px'}}
       src={item.img}
       alt="{item.id}"
     />
     <Carousel.Caption className="bg-secondary border  border-5 rounded"  >
       <h1 >{item.title}</h1>
       <p>{item.desc}</p>
       <Button variant="outline-warning" className="border  border-5 rounded">SHOP NOW</Button>
     </Carousel.Caption>
   </Carousel.Item>
    ))};
      
      
    </Carousel>
  );
}

export default Slider
