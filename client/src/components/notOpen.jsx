import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import DateString from "./dateString";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    textAlign: "center",
  },
  title: {
    color: "#ff4f4f",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
}));

const NotOpen = () => {
  const classes = useStyles();
  const { start, end } = useSelector((state) => state.ui);
  return (
    <Container component="div" maxWidth="lg">
      <CssBaseline />
      <div className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          預選系統尚未開放！
        </Typography>
        <Typography variant="body1">
          開放時間：
          <DateString ISOString={start} />
        </Typography>
        <Typography variant="body1">
          關閉時間：
          <DateString ISOString={end} />
        </Typography>
      </div>
    </Container>
  );
};

export default NotOpen;
