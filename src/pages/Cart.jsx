import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components';



const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;

`;

const Title = styled.h1`
  font-weight:300;
  text-align: center;
`;

const Top = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor:pointer;
  border: ${(props)=> props.type === "filled" && "none"};
  background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
  color: ${(props)=> props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px ;
`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;   
`;
const Info = styled.div`
  flex: 3;

`;
const Product = styled.div`

`;
const ProductDetail = styled.div`

`;
const Image = styled.img`

`;
const Details = styled.div`

`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div``;

const Summary = styled.div`
  flex: 1;
`;


const Cart = () => {
  return (
   <Container>
    <Navbar />
    <Announcement />
        <Wrapper>
          <Title>Your Bag </Title>
          <Top>
              <TopButton>CONTINUE SHOPPING </TopButton>
              <TopTexts>
              
                <Toptext>Shopping Bag (2)</Toptext>
                <Toptext>Your WishList (0)</Toptext>
              </TopTexts>

              <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Details>
                  <ProductName> <b>Product:</b> JEANS PANT</ProductName>
                  <ProductId> <b>ID:</b> 01754545</ProductId>
                  <ProductColor />
                  <ProductSize><b>Size:</b> 32 </ProductSize>

                </Details>
              </ProductDetail>
              <PriceDetail>
              Price

              </PriceDetail>
            </Product>
            
          </Info>
          <Summary>summary</Summary>


          </Bottom>
        </Wrapper>
    <Footer />
   </Container>
  )
}

export default Cart
