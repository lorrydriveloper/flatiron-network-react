import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
  formControl: {
    width: "100%",
  },
  back: {
    marginBottom: theme.spacing(1),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const { cohorts } = props.values;
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState(cohorts[0].id);
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Which was your cohort?
        </Typography>
        <div className={classes.form} onChange={props.onChange}>
          <Grid container spacing={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              {/* <InputLabel id="cohort">You Cohort</InputLabel> */}
              <Autocomplete
                id="cohort_id"
                name="cohort_id"
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setValue(newValue.id);
                    props.onCohortChange(value);
                  } else {
                    setValue(null);
                  }
                }}
                options={cohorts}
                getOptionLabel={_formatCohortString}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Cohort"
                    variant="outlined"
                    placeholder="try to type your cohort lead or campus"
                  />
                )}
              />
            </FormControl>
          </Grid>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.onSubmit}
          >
            Create Account
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                className={classes.back}
                variant="outlined"
                onClick={props.prevStep}
              >
                Back
              </Button>
            </Grid>
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

const _formatCohortString = ({ cohort_lead, campus, course, graduation }) =>
  `${course} with ${cohort_lead} an finished on ${graduation} at campus: ${campus}`;
