import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-shore-83397.herokuapp.com/products?home=home')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Container fluid  className="products">
        <Container>
            <h2 className="text-white mb-2">
                <span className="text-dark">Stocked</span>{" "}
                <span className="text-danger">Products</span>
            </h2>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Row xs={1} md={3} className="g-4 pb-5">
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

export default Products;