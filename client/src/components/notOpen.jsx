import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    textAlign: "center",
  },
  title: {
    color: "#ff4f4f",
    marginBottom: theme.spacing(1),
  },
}));

const NotOpen = () => {
  const classes = useStyles();
  return (
    <Container component="div" maxWidth="lg">
      <CssBaseline />
      <div className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          預選系統尚未開放！
        </Typography>
        <Typography variant="body1">
          開放時間：<b>2020/7/20(一) 0:00 a.m.</b>
        </Typography>
        <Typography variant="body1">
          關閉時間：<b>2020/7/22(三) 3:00 a.m.</b>
        </Typography>
      </div>
    </Container>
  );
};

export default NotOpen;
