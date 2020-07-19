import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/loading";
import NotOpen from "../components/notOpen";

const PrivateRoute = ({ children, path }) => {
  // Check Login
  const { initialized, isLogin } = useSelector((state) => state.session);
  const { systemNotOpen } = useSelector((state) => state.ui);
  return (
    <Route
      path={path}
      render={() => {
        if (!initialized) return <Loading />;
        if (systemNotOpen) return <NotOpen />;
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
