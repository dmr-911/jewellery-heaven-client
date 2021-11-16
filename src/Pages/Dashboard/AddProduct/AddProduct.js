import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        history.push('/');
    };
    const handleShow = () => setShow(true);
    const { user } = useAuth();
    const history = useHistory();
    const initialInfo = { buyerName: user.displayName, email: user.email, phone: '' };
    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo };
        newInfo[field] = value;
        setPurchaseInfo(newInfo);
    }

    const handleAddProduct = e => {
        // collect data
        const order = {
            ...purchaseInfo
        }
        // send to the server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleShow();
                }
            });

        e.preventDefault();
    }

    return (
        <div>
            <h5 className="mt-3">Add a New Product</h5>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handleAddProduct}>
                <input name="name" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Name" />
                <input name="offer" type="number" className="purchase-input" onBlur={handleOnBlur} placeholder="Offer" />
                <input name="price" type="number" className="purchase-input" onBlur={handleOnBlur} placeholder="Price" />
                <input name="img" type="text" className="purchase-input" onBlur={handleOnBlur} placeholder="Image Link" />
                <input name="rating" type="number" className="purchase-input" onBlur={handleOnBlur} placeholder="Rating" />
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

export default AddProduct;