import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const {googleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            history.push(redirect_url);
        })
    }
    return (
        <div>
            <h2>This is Login page</h2>

            <Button onClick={handleGoogleSignIn}>SignIn with google</Button>
        </div>
    );
};

export default LogIn;