import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AllOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[user.email]);
    const handleDelete = (id) => {
        const proceed = window.confirm('Confirm delete your order?')
        if (proceed) {
          const uri = `http://localhost:5000/myOrders/${id}`;
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

      const handleApprove = id =>{
          const update = {status: "shipped"}
        fetch(`http://localhost:5000/myOrders/approve/${id}`,{
            method: 'PUT',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data =>{
            fetch("http://localhost:5000/orders")
          .then((res) => res.json())
          .then((data) => setMyOrders(data));
      }
        )
      }

    return (
        <div>
            <h5>Manage All Orders</h5>
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
                            {
                                order.status === 'approved' ?
                                <td><Button variant="success" onClick={()=> handleApprove(order._id)} disabled>Approve</Button></td>
                                :
                                <td><Button variant="success" onClick={()=> handleApprove(order._id)}>Approve</Button></td>
                            }
                            <td><Button variant="danger" onClick={()=>handleDelete(order._id)}>Delete</Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllOrders;