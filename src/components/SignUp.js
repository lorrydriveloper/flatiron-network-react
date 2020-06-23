import React, { Component } from "react";
import Floatlabelinput from "./FloatLabelInput";

export default class Signup extends Component {
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
    cohort: 1,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
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
        console.log(json);

        this.setState({
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
          cohort: 1,
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Personal info</h1>
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
            <h1>Your Location</h1>
            <Floatlabelinput
              resource="plus_code"
              onChange={this.handleChange}
              value={this.state.plus_code}
            />
          </div>
          <div>
            You Cohort
            <select>
              {this.state.cohorts.map((cohort) => (
                <option>{cohort}</option>
              ))}
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
