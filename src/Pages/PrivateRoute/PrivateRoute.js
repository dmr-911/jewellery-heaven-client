import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
  Route,
  Redirect
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

    if (isLoading) {
       return <Spinner animation="border" />;
  }
    else {
          return (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

};

export default PrivateRoute;