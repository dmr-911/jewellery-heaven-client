import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Home/Product/Product';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-shore-83397.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Container fluid className="explore">
        <Container>
            <Row xs={1} md={3} className="g-4 py-5">
                {
                    products.length ? products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                    :
                    <div className="d-flex justify-content-center align-items-center w-100" style={{height: '80vh'}}>
                    <div>
                    <Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" />
                    </div>
                  </div>
                }
            </Row>
        </Container>
        </Container>
    );
};

export default Explore;