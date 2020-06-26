import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Map from "../helpers/Map";
import { BASEURL } from "../helpers/BaseURL";
import Search from "../components/Search";
import { connect } from "react-redux";

const styles = (theme) => ({
  root: {
    height: "100%",
  },
  map: {
    padding: theme.spacing(1),
    height: "90%",
  },
  search: {
    height: "10%",
  },
});

class GoogleMap extends Component {
  state = {
    users: [],
  };

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
    fetch(BASEURL + "users", options)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          ...this.state,
          users: json,
        })
      );
  };

  componentDidUpdate() {
    Map.init(this.state.users);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid id="Search" className={classes.search} item xs={12}>
          <Search />
        </Grid>
        <Grid id="map" className={classes.map} item xs={12}></Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  store: state,
});

export default connect(mapStateToProps)(withStyles(styles)(GoogleMap));
