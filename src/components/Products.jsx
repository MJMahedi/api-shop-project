import React from 'react'
import { Container } from 'react-bootstrap'
import { popularProducts } from '../data'
import Product from './Product'

const Products = () => {
  return (
    <Container className="flex-wrap  "  style={{ 
      display:'flex' ,
    justifyContent:'space-between',
    
     }} >
        {popularProducts.map( (item)=> (
       <Product item={item} key={item.id} />
        ) )};
    </Container>
  );
};

export default Products
