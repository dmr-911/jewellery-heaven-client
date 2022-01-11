import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Rating from 'react-rating';
import './Product.css';

const Product = ({product}) => {
    const {name, offer, price, img, _id, rating} = product;
    const newPrice = price - price*(offer/100);
    const history = useHistory();
    const handlePurchase = () => {
      history.push(`/purchase/${_id}`);
    }
    return (
        <Col>
        <Card className="bg-dark text-white product-card">
        <div className="d-flex justify-content-between p-0">
            <p className="m-0" style={{ padding: '5px 20px', backgroundColor: 'red', color: 'white', borderRadius: '0 0 30px 0'  }}>{offer ? offer : 0}% Off</p>
            <p className="m-0" style={{ padding: '5px 20px', backgroundColor: 'red', color: 'white', borderRadius: '30px 0 0'  }}>Limited</p>
        </div>
          <Card.Img variant="top" src={img} height="250"/>
          <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Text>
              <del className="text-danger rounded-3"><b>Price</b> : BDT {price} </del><br/>
              <b>Price</b> : BDT {newPrice} <br/><Rating
              readonly
              initialRating={rating}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star golden-rating"
              ></Rating>
            </Card.Text>
            <Button variant="primary" onClick={handlePurchase}>Purchase Now</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Product;