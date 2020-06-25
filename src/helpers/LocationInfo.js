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
  button: {
    margin: theme.spacing(3, 5, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const { plus_code, street, postcode, city, state, country } = props.values;

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
                name="plus_code"
                variant="outlined"
                fullWidth
                id="plus_code"
                label="Plus Code"
                value={plus_code}
              />
            </Grid>
            <h4>Plus code</h4>
            <Grid item xs={12}>
              <div className="separator">OR</div>
              <TextField
                variant="outlined"
                fullWidth
                id="street"
                label="Street"
                name="street"
                autoComplete="street"
                value={street}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="postcode"
                label="Postcode"
                id="postcode"
                autoComplete="postcode"
                value={postcode}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="city"
                label="City"
                id="city"
                autoComplete="city"
                value={city}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="state"
                label="State"
                id="state"
                autoComplete="state"
                value={state}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="country"
                label="Country"
                id="country"
                autoComplete="country"
                value={country}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={props.prevStep}
          >
            {" "}
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
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
