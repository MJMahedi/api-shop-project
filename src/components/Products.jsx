import React from 'react'
import { Container } from 'react-bootstrap'
import { popularProducts } from '../data'
import Product from './Product'

const Products = () => {
  return (
    
    <Container  className="flex-wrap shadow-lg  mb-5  rounded"  style={{ 
      backgroundColor: '#ef7d09',
      padding: '20px',
      display:'flex' ,
      justifyContent: 'center',
    
     }} >
     
        {popularProducts.map( (item)=> (
       <Product item={item} key={item.id} />
        ) )};
    </Container>
  );
};

export default Products
