import React, { Component } from "react";
import { connect } from "react-redux";
import { storeUser } from "../actions/StoreUser";
import PersonalInfo from "../helpers/PersonalInfo";
import LocationInfo from "../helpers/LocationInfo";
import CohortInfo from "../helpers/CohortInfo";
import { login } from "../actions/Auth";
import { BASEURL } from "../helpers/BaseURL";

class Signup extends Component {
  state = {
    step: 1,
    name: "",
    surname: "",
    password: "",
    email: "",
    cohort_id: "",
    plus_code: "",
    street: "",
    city: "",
    postcode: "",
    state: "",
    country: "",

    cohorts: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  nextStep = () => {
    this.setState({
      ...this.state,
      step: this.state.step + 1,
    });
  };

  prevStep = () => {
    this.setState({
      ...this.state,
      step: this.state.step - 1,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let configurationObject = {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
          cohort_id: this.state.cohort_id,
        },
        location: {
          plus_code: this.state.plus_code,
          street: this.state.street,
          postalcode: this.state.postalcode,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
        },
      }),
    };
    fetch(BASEURL + "sign_up", configurationObject)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          throw new Error(json.error + " " + json.message);
        }
        this.props.storeUser(json.user);
        localStorage.setItem("token", json.jwt);
        this.props.login();
      })
      .catch((error) => {
        // TODO: change color of input and alert user of the error
        alert(error);
        console.log(error);
      });
  };

  componentDidMount() {
    fetch(BASEURL + "cohorts")
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          ...this.state,
          cohorts: json,
        })
      );
  }

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <PersonalInfo
            toggle={this.props.toggle}
            nextStep={this.nextStep}
            onChange={this.handleChange}
            values={this.state}
          />
        );
      case 2:
        return (
          <LocationInfo
            toggle={this.props.toggle}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChange={this.handleChange}
            values={this.state}
          />
        );
      case 3:
        return (
          <CohortInfo
            toggle={this.props.toggle}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            values={this.state}
          />
        );
      case 4:
        return (
          <div>
            <h1>Page 4</h1>
            <button onClick={this.prevStep}>Back</button>{" "}
          </div>
        );

      default:
        return <h1>default</h1>;
    }
  }
}

export default connect(null, { storeUser, login })(Signup);
