import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    // Check Login
    const isLogin = true;
    return (
        <Route
            render={() => !isLogin ? children : <Redirect to={{ pathname: '/home' }} />}
        />
    )
}

PublicRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PublicRoute;