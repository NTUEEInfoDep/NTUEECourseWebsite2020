import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fab from "@material-ui/core/Fab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import Box from "@material-ui/core/Box";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { logout } from "../actions/sessionAction";
import Instruction from "./instruction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0.4),
  },
  navBar: {
    backgroundColor: "#202020",
  },
  title: {
    flexGrow: 1,
  },
  instruction: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(3),
    backgroundColor: "rgba(100, 100, 100, 0.8)",
    zIndex: 5001, // draggable item is z-index 5000
  },
  usage: {
    marginLeft: theme.spacing(1),
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
  const [openIns, setOpenIns] = useState(false);
  const handleOpenInstruction = () => {
    setOpenIns(true);
  };
  const handleCloseInstruction = () => {
    setOpenIns(false);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="setting"
            component={RouterLink}
            to="/home"
          >
            <TouchAppIcon />
          </IconButton>
          <Typography className={classes.title}>
            <Button
              variant="text"
              size="large"
              component={RouterLink}
              to="/home"
              style={{ fontSize: "large" }}
            >
              NTUEE Course
            </Button>
          </Typography>
          {isLogin === true ? (
            <div>
              <Button style={{ color: "white" }} disabled>
                {studentID}
              </Button>
              <IconButton color="inherit" onClick={handleLogout}>
                <ExitToAppIcon />
              </IconButton>
            </div>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Github link"
              href="https://github.com/NTUEEInfoDep/NTUEECourseWebsite2020"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Fab
        variant="extended"
        color="primary"
        aria-label="instruction"
        className={classes.instruction}
        onClick={() => handleOpenInstruction()}
      >
        <SettingsIcon />
        <Box display={{ xs: "none", sm: "block" }} className={classes.usage}>
          Usage
        </Box>
      </Fab>
      <Instruction open={openIns} onClose={handleCloseInstruction} />
    </div>
  );
};

export default NavBar;
