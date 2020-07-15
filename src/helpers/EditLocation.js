import React from "react";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";

export default function Editpersonalinfo(props) {
  return (
    <Paper className={props.classes.paper} elevation={12}>
      <Typography variant="h5">Your Location</Typography>
      <Grid container spacing={2}>
        {Object.keys(props.address).map((key) => (
          <Grid key={key} item xs={key === "street" ? 12 : 6}>
            <TextField
              name={key}
              variant="outlined"
              fullWidth
              id={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={props[key] || ""}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
