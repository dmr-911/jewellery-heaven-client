import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo3.png';

const CustomNavbar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center">
                        <img
                            src={logo}
                            width="160"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <b>Jewellery Heaven</b>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
                        {
                            user.email &&
                            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        }
                        {
                            user.email ?
                            <>
                               {
                                   user.photoURL ? 
                                   <img src={user?.photoURL} heigth="40" width="40" className="rounded-circle me-2" alt="dp" />
                                   :
                                   <span className="text-white my-auto me-2">Signed in as : {user.displayName.toUpperCase()}</span>
                               }
                                <Button className="btn-danger" onClick={logOut}>Logout</Button>

                            </>
                                :
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }
                        {/* <p style={{ color: 'white' }}>Signed in as : {user.email}</p> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;