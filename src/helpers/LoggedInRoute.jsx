import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedInRoute = ({ children, authenticated, redirectPath, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!authenticated) return children;
        return <Redirect to={redirectPath} />;
      }}
    />
  );
};

export default LoggedInRoute;
