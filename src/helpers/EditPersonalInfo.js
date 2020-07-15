import React from "react";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";

export default function Editpersonalinfo({ classes, name, surname, email }) {
  return (
    <Paper className={classes.paper} elevation={12}>
      <Typography variant="h5">Personal Info</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            variant="outlined"
            fullWidth
            id="name"
            label="Name"
            value={name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="surname"
            variant="outlined"
            fullWidth
            id="surname"
            label="Surname"
            value={surname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            variant="outlined"
            fullWidth
            id="email"
            label="Email"
            value={email}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
