import React, { Component } from "react";
import { Paper, Button, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import SearchSelects from "../helpers/SearchSelects";
import { connect } from "react-redux";
import { filterUsers } from "../actions/UsersActions";
import { BASEURL } from "../helpers/BaseURL";

const styles = () => ({
  form: {
    width: "100%",
    display: "inline-block",
    padding: 5,
  },
  paper: {
    background: "linear-gradient(to top,#1a8a9d,  #00d2c8)",
  },
  searchSelect: {
    width: "25%",
    marginRight: 15,
  },
});

class Search extends Component {
  state = {
    searchBy: "all",
    cohort: "",
    course: "",
    campus: "",
    courses: [],
    campuses: [],
    cohorts: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchFilters();
  }

  fetchFilters = async () => {
    const cohorts = await fetch(BASEURL + "cohorts");
    const campuses = await fetch(BASEURL + "campus");
    const courses = await fetch(BASEURL + "courses");

    const cohortsJSON = await cohorts.json();
    const campusesJSON = await campuses.json();
    const coursesJSON = await courses.json();
    this.setState({
      ...this.state,
      cohorts: cohortsJSON,
      courses: coursesJSON,
      campuses: campusesJSON,
      loading: false,
    });
  };

  handleChange = (e) => {
    //callback SetSearchBy wait for new state to be
    // set to searchBy bases in previous state.
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      this.setSearchBy
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.filterUsers(this.state);
  };

  setSearchBy = () => {
    if (this.state.cohort) {
      this.setState({
        searchBy: "cohort",
      });
    } else {
      if (!!this.state.campus && !!this.state.course) {
        this.setState({ searchBy: "course & campus" });
      } else if (!!this.state.campus && !this.state.course) {
        this.setState({ searchBy: "campus" });
      } else if (!this.state.campus && !!this.state.course) {
        this.setState({ searchBy: "course" });
      } else {
        this.setState({ searchBy: "all" });
      }
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <FormControl className={classes.form}>
          <SearchSelects
            className={classes.searchSelect}
            type="cohort"
            onChange={this.handleChange}
            value={this.state.cohort}
            populate={this.state.cohorts}
            disabled={!!this.state.course || !!this.state.campus}
            loading={this.state.loading}
          />
          <SearchSelects
            className={classes.searchSelect}
            type="course"
            onChange={this.handleChange}
            value={this.state.course}
            populate={this.state.courses}
            disabled={!!this.state.cohort}
            loading={this.state.loading}
          />
          <SearchSelects
            className={classes.searchSelect}
            type="campus"
            onChange={this.handleChange}
            value={this.state.campus}
            populate={this.state.campuses}
            disabled={!!this.state.cohort}
            loading={this.state.loading}
          />
          <Button
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Search <SearchIcon />
          </Button>
        </FormControl>
      </Paper>
    );
  }
}

export default connect(null, { filterUsers })(withStyles(styles)(Search));
