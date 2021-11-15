import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';

const Product = ({product}) => {
    const {name, offer, price, img, rating} = product;
    return (
        <Col>
        <Card className="bg-dark text-white">
        <div className="d-flex justify-content-between p-0">
            <p className="m-0" style={{ padding: '5px 20px', backgroundColor: 'red', color: 'white', borderRadius: '0 0 30px 0'  }}>{offer} Off</p>
            <p className="m-0" style={{ padding: '5px 20px', backgroundColor: 'red', color: 'white', borderRadius: '30px 0 0'  }}>Limited</p>
        </div>
          <Card.Img variant="top" src={img} height="250"/>
          <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Text>
              <b>Price</b> : BDT {price} 
              <Rating
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
  fractions={2}
/>
            </Card.Text>
            <Button variant="primary">Purchase Now</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Product;