import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  children,
  loading,
  authenticated,
  redirectPath,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) return <div>Loading...</div>;
        if (authenticated) return children;

        return <Redirect to={`/login?from=${redirectPath}`} />;
      }}
    />
  );
};

export default PrivateRoute;
