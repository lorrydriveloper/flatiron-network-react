import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
    "box-shadow": "4px 5px 15px #00000040, 0px 4px 4px #00000040",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const { name, surname, password, email } = props.values;
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form} onChange={props.onChange}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                value={name}
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="surname"
                label="Last Name"
                name="surname"
                autoComplete="lname"
                value={surname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
              />
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.nextStep}
          >
            Next
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button variant="text" onClick={() => props.toggle(true)}>
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
