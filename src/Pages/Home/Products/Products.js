import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products?home=home')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <Container>
            <Row xs={1} md={2} className="g-4 my-5">
                {
                    products.map(product => <Product
                     key={product._id}
                     product={product}
                    ></Product>)
                }
            </Row>
        </Container>
    );
};

export default Products;