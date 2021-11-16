import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import AllOrders from '../AllOrders/AllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
    const {admin, logOut} = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <Container fluid className="my-3">
            <Row>
                <Col xs={12} md={3} className="border border-dark">
                    <h5><u>Dashboard</u></h5>
                        <b><Link to={`${url}/pay`}>Pay</Link></b><br />
                        <b><Link to={`${url}/myOrders`}>My Orders</Link></b><br />
                        <b><Link to={`${url}/review`}>Review</Link></b><br />
                        {
                            admin && <>
                            <b><Link to={`${url}/allOrders`}>Manage All Orders</Link></b><br />
                        <b><Link to={`${url}/addProduct`}>Add a Product</Link></b><br />
                        <b><Link to={`${url}/makeAdmin`}>Make Admin</Link></b><br />
                        <b><Link to={`${url}/manageProducts`}>Manage Products</Link></b><br /></>
                        }
                        <Button className="my-3 btn-danger" onClick={logOut}>Logout</Button>
                </Col>
                <Col xs={12} md={9} className="border border-dark">
                <Switch>
                <Route exact path={path}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay></Pay>
                </Route>
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
                <AdminRoute path={`${path}/allOrders`}>
                    <AllOrders></AllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addProduct`}>
                   <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
            </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;