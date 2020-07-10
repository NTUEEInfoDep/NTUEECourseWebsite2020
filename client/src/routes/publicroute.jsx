import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
    // Check Login
    const isLogin = useSelector(state => state.session.isLogin);
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