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
                <Col xs={12} md={3} className="border border-2 border-dark">
                    <h5><u>Dashboard</u></h5>
                    <ul>
                        <Link to={`${url}/pay`}>Pay</Link><br />
                        <Link to={`${url}/myOrders`}>My Orders</Link><br />
                        <Link to={`${url}/review`}>Review</Link><br />
                        {
                            admin && <>
                            <Link to={`${url}/allOrders`}>Manage All Orders</Link><br />
                        <Link to={`${url}/addProduct`}>Add a Product</Link><br />
                        <Link to={`${url}/makeAdmin`}>Make Admin</Link><br />
                        <Link to={`${url}/manageProducts`}>Manage Products</Link><br /></>
                        }
                        <Button onClick={logOut}>Logout</Button>
                    </ul>
                </Col>
                <Col xs={12} md={9} className="border border-2 border-dark">
                <Switch>
                <Route exact path={path}>
                    <Review></Review>
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