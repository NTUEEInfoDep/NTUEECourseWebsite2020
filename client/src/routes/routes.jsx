import React from 'react';
import {
    Switch,
    Redirect
} from "react-router-dom";

import SignIn from '../components/signIn.jsx';
import Course from '../components/course.jsx';
import Home from '../components/home.jsx';
import NavBar from '../components/navbar.jsx';

import PublicRoute from './publicroute.jsx';
import PrivateRoute from './privateroute.jsx';

const Routes = () => (
    <div>
        <NavBar />
        <Switch>
            <PublicRoute path='/login'>
                <SignIn />
            </PublicRoute>
            <PrivateRoute path='/home'>
                <Home />
            </PrivateRoute>
            <PrivateRoute path='/course/:id'>
                <Course />
            </PrivateRoute>
            <Redirect to='/login' />
        </Switch>
    </div>
);

export default Routes;
