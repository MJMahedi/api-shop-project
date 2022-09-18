import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { categories } from '../data';
import Button from 'react-bootstrap/Button';

const Categories = () => {
  return (
    <CardGroup>
    {categories.map( (item) => (
      <Card className="m-5">
      
        <Card.Img variant="top" style={{height: '320px'}} src={item.img} key={item.id}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <div className="d-grid gap-2">
      <Button variant="secondary" size="lg">
       SHOP NOW !
      </Button>
    </div>
        </Card.Footer>
      </Card>
      
      ))};
    </CardGroup>
  )
}

export default Categories
