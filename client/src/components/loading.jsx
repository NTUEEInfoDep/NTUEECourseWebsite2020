import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    minHeight: "100vh",
  },
  progress: {
    marginTop: "30vh",
  },
}));
const Loading = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.progress}>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loading;
