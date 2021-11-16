import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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
            <Row xs={1} md={2} className="g-4 py-5">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Row>
        </Container>
        </Container>
    );
};

export default Explore;