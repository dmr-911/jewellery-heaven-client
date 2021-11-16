import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[user.email]);
    console.log(myOrders);

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
                        myOrders.map(order =>                     <tr key={order._id}>
                            <td>{order.buyerName}</td>
                            <td>{order.email}</td>
                            <td>{order.product}</td>
                            <td>{order.price}</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                            <td><Button variant="warning">Cancel</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;