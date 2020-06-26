import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { storeUsers } from "../actions/UsersActions";
import Map from "../helpers/Map";
// import { BASEURL } from "../helpers/BaseURL";
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
    if (this.props.users.length === 0) {
      this.props
        .storeUsers()
        .then(() => {
          Map.init(this.props.users);
        })
        .catch((error) => console.log(error));
    } else {
      Map.init(this.props.users);
    }
  }

  componentDidUpdate() {
    Map.init(this.props.users);
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
  users: state.users.users,
});

export default connect(mapStateToProps, { storeUsers })(
  withStyles(styles)(GoogleMap)
);
