import React, { Component } from "react";
import { Paper, Button, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import SearchSelects from "../helpers/SearchSelects";
import { connect } from "react-redux";
import { filterUSers } from "../actions/UsersActions";

const campus = [
  {
    id: 1,
    name: "Austin Campus",
  },
  {
    id: 2,
    name: "Chicago Campus",
  },
  {
    id: 3,
    name: "Denver Campus",
  },
  {
    id: 4,
    name: "Houston Campus",
  },
  {
    id: 5,
    name: "New York Manhattan Campus",
  },
  {
    id: 6,
    name: "New York Brooklyn Campus",
  },
  {
    id: 7,
    name: "San Francisco Campus",
  },
  {
    id: 8,
    name: "Seattle Campus",
  },
  {
    id: 9,
    name: "Washington, D.C. Campus",
  },
  {
    id: 10,
    name: "London Campus",
  },
  {
    id: 11,
    name: "Online",
  },
];

const cohorts = [
  {
    id: 1,
    cohort_lead: "Alex Aguilar",
    campus: "Online",
    course: "Software Engineering",
    graduation: "2020-07-01",
  },
  {
    id: 2,
    cohort_lead: "Morgan VanYperen",
    campus: "Online",
    course: "Software Engineering",
    graduation: "2020-06-01",
  },
];

const courses = [
  {
    id: 1,
    title: "Software Engineering",
  },
  {
    id: 2,
    title: "Data Science",
  },
  {
    id: 3,
    title: "Cybersecurity",
  },
  {
    id: 4,
    title: "UX/UI Design",
  },
];

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
    this.props.filterUSers(this.state);
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
            populate={cohorts}
            disabled={!!this.state.course || !!this.state.campus}
          />
          <SearchSelects
            className={classes.searchSelect}
            type="course"
            onChange={this.handleChange}
            value={this.state.course}
            populate={courses}
            disabled={!!this.state.cohort}
          />
          <SearchSelects
            className={classes.searchSelect}
            type="campus"
            onChange={this.handleChange}
            value={this.state.campus}
            populate={campus}
            disabled={!!this.state.cohort}
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

export default connect(null, { filterUSers })(withStyles(styles)(Search));
