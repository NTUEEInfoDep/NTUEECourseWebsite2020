import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { logout } from "../actions/sessionAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBar: {
    backgroundColor: "#202020",
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const isLogin = useSelector((state) => state.session.isLogin);
  const studentID = useSelector((state) => state.session.studentID);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={RouterLink}
            to="/home"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NTUEE Course
          </Typography>
          {isLogin === true ? (
            <div>
              <Button style={{ color: "white" }} disabled>
                {studentID}
              </Button>
              {/* <Button color="inherit" onClick={handleLogout}>
                logout
              </Button> */}
              <IconButton color="inherit" onClick={handleLogout}>
                <ExitToAppIcon />
              </IconButton>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
