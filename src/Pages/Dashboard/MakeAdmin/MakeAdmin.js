import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://sleepy-shore-83397.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    handleShow();
                    setEmail('');
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <Form.Control onBlur={handleOnBlur} className="w-50 mx-auto" type="email" placeholder="Enter Email" />
                <Button type="submit" variant="success" className="my-2">Make Admin</Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Woohoo, Made Admin Successfully</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
            {/* {
                success && 
            } */}
        </div>
    );
};

export default MakeAdmin;