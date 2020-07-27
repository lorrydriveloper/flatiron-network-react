import React from "react";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";

export default function Editsocialmedia(props) {
  return (
    <Paper className={props.classes.paper} elevation={12}>
      <Typography variant="h5">Social Media</Typography>
      <Grid container spacing={2}>
        {Object.keys(props.social).map((key) => {
          return (
            <Grid key={key} item xs={12} sm={6}>
              <TextField
                name={key}
                variant="outlined"
                fullWidth
                id={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={props[key] || ""}
                placeholder="https://blablabla.com"
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}
