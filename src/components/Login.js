import React, { Component } from "react";
import Floatlabelinput from "./FloatLabelInput";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // let configurationObject = {
    //   method: "Post",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(this.state),
    // };
    // fetch("http://localhost:3001/api/v1/login", configurationObject)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);

    //     this.setState({
    //       password: "",
    //       email: "",
    //     });
    //   });
  };

  render() {
    return (
      <form>
        <Floatlabelinput
          resource="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <Floatlabelinput
          resource="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
      </form>
    );
  }
}
