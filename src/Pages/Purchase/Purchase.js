import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Purchase.css';
import useAuth from '../../hooks/useAuth';
import { Modal, Button } from 'react-bootstrap';

const Purchase = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        history.push('/dashboard/myOrders');
    };
    const handleShow = () => setShow(true);
    const { user } = useAuth();
    const history = useHistory();
    const date = new Date();
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const matchedItem = products.find(product => product._id === id);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }

    const handlePurchase = e => {
        e.preventDefault();
        // collect data
        const order = {
            ...purchaseInfo,
            product: matchedItem.name,
            price: matchedItem.price - matchedItem.price * (matchedItem.offer / 100),
            date: date.toLocaleDateString(),
            rating: matchedItem.rating,
            status : 'pending'
        };
        console.log(order);
        // send to the server
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(resultData => {
                if (resultData.insertedId) {
                    handleShow();
                }
            });
    }

    return (
        <div>
            <h5 className="mt-3">User Details</h5>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handlePurchase}>
                <input name="name" defaultValue={user.displayName} type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Name" />
                <input name="email" defaultValue={user.email} type="email" className="purchase-input" onBlur={handleOnBlur} placeholder="email" />
                <input name="phone" type="number" className="purchase-input" onBlur={handleOnBlur} placeholder="Phone" />
                <input name="city" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="City" />
                <input name="country" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Country" />
                <input type="submit" value="Submit" className="purchase-input btn-danger" />
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Order Placed Successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Purchase;