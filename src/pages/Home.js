import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography, withStyles } from "@material-ui/core";
import DevSection from "../components/DevSection";
import WeatherSection from "../components/WeatherSection";

const styles = () => ({
  root: {
    height: "100%",
    overflow: "auto",
  },
  header: {
    paddingBottom: 10,
    textAlign: "center",
    fontWeight: 700,
  },
});

class Home extends Component {
  state = {
    temp: 0,
    city: "",
    icon: "",
    description: "",
    loading: true,
    articles: {
      array: [],
      loading: true,
    },
  };

  componentDidMount() {
    const lat = this.props.user.address.latitude;
    const lon = this.props.user.address.longitude;
    const apiKey = process.env.REACT_APP_WEATHER_KEY;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ...this.state,
          // transform Kevin to Celsius
          temp: json.main.temp - 273.15,
          city: json.name,
          icon: json.weather[0].icon,
          description: json.weather[0].description,
          loading: false,
        });
      })
      .catch((error) => console.log(error));

    fetch("https://dev.to/api/articles?top=7")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ...this.state,
          articles: {
            array: json,
            loading: false,
          },
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { classes, user } = this.props;
    return (
      <>
        <Typography className={classes.header} variant="h4">
          Welcome {user.name}
        </Typography>
        <Grid container className={classes.root} spacing={2}>
          <Grid item md={6} xs={12}>
            <DevSection {...this.state} />
          </Grid>
          <Grid item md={6} xs={12}>
            <WeatherSection {...this.state} />
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.usersStore.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Home));
