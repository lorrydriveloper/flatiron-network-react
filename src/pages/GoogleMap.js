import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { createRef } from "react";
import Map from "../helpers/Map";

const styles = (theme) => ({
  root: {
    // "background-color": "black",
    height: "100%",
  },
  map: {
    // "background-color": "red",
    padding: theme.spacing(1),
  },
});

class GoogleMap extends Component {
  state = {
    markers: [],
  };
  mapRef = createRef();

  componentDidMount() {
    this.handlefetch();
  }

  handlefetch = () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    fetch("http://localhost:3001/api/v1/users", options)
      .then((res) => res.json())
      .then((json) => Map.init(json));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid id="Search" className={classes.map} item sm={3} xs={12}>
          Search
        </Grid>
        <Grid
          id="map"
          ref={this.mapRef}
          className={classes.map}
          item
          sm={9}
          xs={12}
        ></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GoogleMap);
