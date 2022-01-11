import React, { useState } from 'react';
import { Card, Col, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { registerUser, isLoading, error } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    
    return (
      <>
        <div className="bg-dark login-page pt-5">
          <Col xs={12} md={5} className="mx-auto mb-5">
            <Card className="p-3">
              <h3>Sign Up</h3>
              <div className="divider bg-info rounded mb-3 mx-auto"></div>
              {
                  !isLoading && <Form  onSubmit={handleLoginSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      className="border border-1 border-dark"
                      name="name"
                      onBlur={handleOnBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="border border-1 border-dark"
                      name="email"
                      onBlur={handleOnBlur}
                    />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="border border-1 border-dark"
                      name="password"
                      onBlur={handleOnBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Re-type Password"
                      className="border border-1 border-dark"
                      name="password2"
                      onBlur={handleOnBlur}
                    />
                  </Form.Group>
                  <p className="fw-bold">
                    {error ? error : 'Already an user?'} Please{" "}
                    <Link to="/login">Login</Link>
                  </p>
                  <Button variant="success" type="submit">
                    Sign Up
                  </Button>
                </Form>
              }
            </Card>
          </Col>
          <div className="divider bg-info rounded mx-auto"></div>
        </div>
      </>
    );
};

export default SignUp;