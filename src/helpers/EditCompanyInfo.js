import React from "react";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";

export default function Editpersonalinfo({ classes, logo, company_name }) {
  return (
    <Paper className={classes.paper} elevation={12}>
      <Typography variant="h5">Your Place of Work</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="company_name"
            variant="outlined"
            fullWidth
            id="company_name"
            label="Your Company"
            value={company_name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="logo"
            variant="outlined"
            fullWidth
            id="logo"
            label="Your Company Logo"
            value={logo}
            placeholder="https://blablabla.com"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
