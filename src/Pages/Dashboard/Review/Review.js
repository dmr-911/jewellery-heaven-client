import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        history.push('/');
    };
    const handleShow = () => setShow(true);
    const initialInfo = { name: user.displayName, rating: '', comment: '' };
    const [reviewInfo, setReviewInfo] = useState(initialInfo);

    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const review = {
            ...reviewInfo
        };
        fetch('https://sleepy-shore-83397.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
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
            <h4>Review page</h4>
            <Form className="w-50 mx-auto text-start mb-5" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" onBlur={handleBlur} type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control name="rating" onBlur={handleBlur} type="number" placeholder="Give Rating" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment here</Form.Label>
                    <Form.Control name="comment" onBlur={handleBlur} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
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

export default Review;