import React from "react";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";

export default function Editpersonalinfo({ classes, name, surname }) {
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
            value={name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="logo"
            variant="outlined"
            fullWidth
            id="logo"
            label="Your Comapny Logo"
            value="{logo}"
            placeholder="https://blablabla.com"
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
