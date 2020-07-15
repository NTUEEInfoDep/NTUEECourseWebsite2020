import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import SignIn from "../components/signIn";
import CourseSelection from "../components/courseSelection";
import Home from "../components/home";
import NavBar from "../components/navbar";

import PublicRoute from "./publicroute";
import PrivateRoute from "./privateroute";

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
      <PrivateRoute path="/course/:courseID">
        <CourseSelection />
      </PrivateRoute>
      <Redirect to="/login" />
    </Switch>
  </ThemeProvider>
);

export default Routes;
