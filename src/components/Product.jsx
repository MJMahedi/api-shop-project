import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
border-radius:50%;
background-color: rgba(0,0,0,0.2);
z-index: 3;
display:flex;
align-items:center;
justify-content:center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex : 1;
margin: 5px;
min-width: 280px;
height:350px;
margin:15px;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #f5fbfd;
position:relative;
&:hover ${Info} {
 opacity:1;
}
`;

const Image = styled.div`
height: 75%;
z-index: 2;
`;

const Icon = styled.div`
width:50px;
height:50px;
top:10;
border-radius:50%;
background-color: white;
display:flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.4s ease;
 &:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
 }
`;

const Circle = styled.div`
width: 200px;
height:200px;
border-radius:50%;
background-color: #0e4b68;
position: absolute;

`;

const Product = ({ item }) => {

  return (

    <Container className=""  >
      <Circle>

      </Circle>

      <Image>
      <img style= {{
        height:'75%',
      }} src={item.img}  />
      </Image>
      <Card.Body>
        <Card.Title style={{
          textAlign: 'center',
          fontSize: '1.5em',
          fontWeight: 'bold',
          paddingTop: '20px',

        }}>{item.title}</Card.Title>
        <Info >
          <Icon>
            <FontAwesomeIcon style={{
              color: 'yellowgreen', fontSize: "30",
            }}
              icon={faCartPlus} />
          </Icon>
          <Icon>
            <FontAwesomeIcon style={{ color: "red", fontSize: "30" }}
              icon={faHeart} />
          </Icon>
        </Info>
      </Card.Body>
    </Container>
  )
}

export default Product
