import React, { useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://sleepy-shore-83397.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Confirm delete your order?')
        if (proceed) {
            const uri = `https://sleepy-shore-83397.herokuapp.com/myOrders/${id}`;
            fetch(uri, {
                method: "DELETE",
            })
                .then((res) => res.json)
                .then((data) => {
                    const restOrders = myOrders.filter(order => order._id !== id)
                    setMyOrders(restOrders);
                });
        }

    };

    return (
        <div>
            <h5>My Orders</h5>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Ordered Time</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.length ? myOrders.map(order => <tr key={order._id}>
                            <td>{order.buyerName}</td>
                            <td>{order.email}</td>
                            <td>{order.product}</td>
                            <td>{order.price}</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                            {
                                order.status === 'shipped' ?
                                    <td><Button variant="warning" disabled>Cancel</Button></td>
                                    :
                                    <td><Button onClick={() => handleDelete(order._id)} variant="warning">Cancel</Button></td>
                            }
                            <td><Button variant="danger" onClick={() => handleDelete(order._id)}>Delete</Button></td>
                        </tr>)
                            :
                            <>
                                <Spinner animation="grow" size="sm" />
                                <Spinner animation="grow" /></>
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;