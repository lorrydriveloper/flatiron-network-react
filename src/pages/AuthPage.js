import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { Grid, CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    "align-content": "center",
    padding: 90,
  },
});
export default function Authpage(props) {
  const [toggle, setToggle] = useState(true);
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {toggle ? (
        <Login {...props} toggle={setToggle} />
      ) : (
        <SignUp {...props} toggle={setToggle} />
      )}
    </Grid>
  );
}
