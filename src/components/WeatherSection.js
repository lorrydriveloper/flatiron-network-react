import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "60%",
    padding: theme.spacing(3),
    textAlign: "center",
    overflowY: "hidden",
  },
  headerWeather: {
    fontWeight: 600,
  },
  backWeather: {
    backgroundColor: "#46c7f4",
    borderRadius: 50,
  },
}));

export default function DevSection({ city, icon, temp, description, loading }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={12}>
      {loading ? null : (
        <>
          <Typography className={classes.headerWeather} variant="h5">
            {`Today's Weather in ${city}`}
          </Typography>
          <div className={classes.backWeather}>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt="actual weather icon"
            />
            <Typography variant="h3">{`${temp.toFixed(1)} °C`}</Typography>
            <Typography variant="h4">{description}</Typography>
          </div>
        </>
      )}
    </Paper>
  );
}
