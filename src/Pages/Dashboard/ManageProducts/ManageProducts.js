import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-shore-83397.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Confirm delete your order?')
        if (proceed) {
            const uri = `https://sleepy-shore-83397.herokuapp.com/products/${id}`;
            fetch(uri, {
                method: "DELETE",
            })
                .then((res) => res.json)
                .then((data) => {
                    const restOrders = products.filter(order => order._id !== id)
                    setProducts(restOrders);
                });
        }

    };

    return (
        <Container fluid>
            <h3>Manage all products</h3>
            <Row xs={1} md={2} className="g-2 mb-5">
                {
                    products.length ?
                        products.map(product => <ManageSingleProduct
                            key={product._id}
                            product={product}
                            handleDelete={handleDelete}
                        ></ManageSingleProduct>)
                        :
                        <Container fluid className="mx-auto my-auto">
                            <Spinner animation="grow" size="sm" />
                            <Spinner animation="grow" /></Container>
                }
            </Row>
        </Container>
    );
};

export default ManageProducts;