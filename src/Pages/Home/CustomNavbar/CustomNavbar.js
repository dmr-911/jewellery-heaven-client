import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/4180768-removebg-preview.png';

const CustomNavbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="160"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
                        {
                            user.email &&
                            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        }
                        {
                            user.email ?
                                <Button onClick={logOut}>Logout</Button>
                                :
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default CustomNavbar;