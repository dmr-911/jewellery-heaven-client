import React from 'react';
import { Spinner } from 'react-bootstrap';
import {
  Route,
  Redirect
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();

  if (!admin) {
    return <Spinner animation="border" />;
  }
  else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

};

export default AdminRoute;