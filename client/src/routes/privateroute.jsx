import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    // Check Login
    const isLogin = useSelector(state => state.session.isLogin);
    return (
        <Route
            render={() => isLogin ? children : <Redirect to={{ pathname: '/login' }} />}
        />
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PrivateRoute;