import React, { useRef } from 'react';
import './Login.css';
import { Col, Card, Form, Button } from "react-bootstrap";
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {
  const { signInWithGoogle, signInWithEmail, message, setMessage } = useAuth();
  const emailRef = useRef();
  const passRef = useRef();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
      signInWithGoogle(location, history);
  };
  
      const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmail(email, password)
          .then((data) => {
            history.push(redirect_url);
          })
          .catch((error) => {
            setMessage(
              "Email or pass not identified! Please create an account or check the email or passwork is correct!"
            );
          });
      };

  return (
    <>
      <div
        className="login-page py-5"
        style={{ backgroundColor: "#394650" }}
      >
        <Col xs={12} md={5} className="mx-auto mb-5">
          <Card className="p-3">
            <h3>Login</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="border border-1 border-dark"
                  ref={emailRef}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="border border-1 border-dark"
                  ref={passRef}
                />
              </Form.Group>
              {message && <small className="text-danger">{message}</small>}
              <p className="fw-bold">
                New to Tour Travel ? Please create an account{" "}
                <Link to="/signUp">SignUp</Link>
              </p>
              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
            <b className="my-3">Or</b>
            <div
              className="border border-2 border-dark rounded google-signin w-50 mx-auto py-2"
              onClick={handleGoogleSignIn}
            >
              <img
                src="https://i.ibb.co/n6DTPm7/login-removebg-preview.png"
                height="30px"
                width="30px"
                alt=""
              />
              <span style={{ cursor: 'pointer' }}>
                <b> Signin With Google</b>
              </span>
            </div>
          </Card>
        </Col>
        <div className="divider bg-info rounded mx-auto"></div>
      </div>
    </>
  );
};

export default Login;