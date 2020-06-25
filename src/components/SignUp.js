import React, { Component } from "react";
import Floatlabelinput from "./FloatLabelInput";
import "../assets/styles/SignUpForm.scss";
import CohortOption from "./CohortOption";
import { connect } from "react-redux";
import StoreUser from "../actions/StoreUser";

class Signup extends Component {
  state = {
    name: "",
    surname: "",
    password: "",
    email: "",
    plus_code: "",
    street: "",
    city: "",
    postcode: "",
    state: "",
    country: "",
    cohort_id: "",
    cohorts: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
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
      body: JSON.stringify(this.state),
    };
    fetch("http://localhost:3001/api/v1/sign_up", configurationObject)
      .then((res) => res.json())
      .then((json) => {
        this.props.storeUser(json.user);
        this.setState({
          ...this.state,
          name: "",
          surname: "",
          password: "",
          email: "",
          plus_code: "",
          street: "",
          city: "",
          postcode: "",
          state: "",
          country: "",
          cohort: "",
        });
        localStorage.setItem("token", json.jwt);
        this.props.history.push("/");
      });
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/cohorts")
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          ...this.state,
          cohorts: json,
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div>
            <h2>Personal info</h2>
            <Floatlabelinput
              resource="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Floatlabelinput
              resource="surname"
              onChange={this.handleChange}
              value={this.state.surname}
            />
            <Floatlabelinput
              type="password"
              resource="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <Floatlabelinput
              type="email"
              resource="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <h2>Your Location</h2>
            <Floatlabelinput
              resource="plus_code"
              onChange={this.handleChange}
              value={this.state.plus_code}
              required={false}
            />
            <h2>or</h2>
            <Floatlabelinput
              resource="street"
              onChange={this.handleChange}
              value={this.state.street}
              required={false}
            />
            <Floatlabelinput
              resource="city"
              onChange={this.handleChange}
              value={this.state.city}
              required={false}
            />
            <Floatlabelinput
              resource="postcode"
              onChange={this.handleChange}
              value={this.state.postcode}
              required={false}
            />
            <Floatlabelinput
              resource="state"
              onChange={this.handleChange}
              value={this.state.state}
              required={false}
            />
            <Floatlabelinput
              resource="country"
              onChange={this.handleChange}
              value={this.state.country}
              required={false}
            />
          </div>
          <div>
            <h2>You Cohort</h2>
            <select
              onChange={this.handleChange}
              onBlur={this.handleChange}
              name="cohort_id"
            >
              <option>Select you cohort</option>
              {this.state.cohorts.map((cohort) => (
                <CohortOption key={cohort.id} {...cohort} />
              ))}
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={() => this.props.login(true)}>
          Have an account login
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  storeUser: (user) => dispatch(StoreUser(user)),
});

export default connect(null, mapDispatchToProps)(Signup);
