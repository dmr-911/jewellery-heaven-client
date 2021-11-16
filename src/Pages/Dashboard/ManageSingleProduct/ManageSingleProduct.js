import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageSingleProduct = ({ product, handleDelete }) => {
  const { img, name, price, offer, _id } = product;
  const newPrice = price - price * (offer / 100);

  return (
    <Col>
      <Card className="bg-dark text-white">
        <div className="d-flex justify-content-between p-0">
          <p className="m-0" style={{ padding: '5px 20px', backgroundColor: 'red', color: 'white', borderRadius: '0 0 30px 0' }}>{offer ? offer : 0}% Off</p>
          <p className="m-0" style={{ padding: '5px 20px', backgroundColor: 'red', color: 'white', borderRadius: '30px 0 0' }}>Limited</p>
        </div>
        <Card.Img variant="top" src={img} height="250" />
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
          <Card.Text>
            <del className="text-danger"><b>Price</b> : BDT {price} </del><br />
            <b>Price</b> : BDT {newPrice}
          </Card.Text>
          <Button variant="danger" onClick={() => handleDelete(_id)}>Delete Product</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ManageSingleProduct;