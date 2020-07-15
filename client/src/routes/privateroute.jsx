import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading";

const PrivateRoute = ({ children, path }) => {
  // Check Login
  const { initialized, isLogin } = useSelector((state) => state.session);
  return (
    <Route
      path={path}
      render={() => {
        if (!initialized) return <Loading />;
        return isLogin ? children : <Redirect to="/login" />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
