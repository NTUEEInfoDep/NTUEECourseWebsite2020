import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import SignIn from "../components/signIn.jsx";
import Course from "../components/course.jsx";
import Home from "../components/home.jsx";
import NavBar from "../components/navbar.jsx";

import PublicRoute from "./publicroute.jsx";
import PrivateRoute from "./privateroute.jsx";

import theme from "../theme/theme";

const Routes = () => (
  <ThemeProvider theme={theme}>
    <NavBar />
    <Switch>
      <PublicRoute path="/login">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/course/:id">
        <Course />
      </PrivateRoute>
      <Redirect to="/login" />
    </Switch>
  </ThemeProvider>
);

export default Routes;
