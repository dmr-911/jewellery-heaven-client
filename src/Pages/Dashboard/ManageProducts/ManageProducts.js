import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <Container fluid>
            <h3>Manage all products</h3>
            <Row xs={1} md={2} className="g-2 mb-5">
                {
                    products.map(product => <ManageSingleProduct
                    key={product._id}
                    product={product}
                    ></ManageSingleProduct>)
                }
            </Row>
        </Container>
    );
};

export default ManageProducts;