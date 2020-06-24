import React, { Component } from "react";
import { connect } from "react-redux";
import Section from "../components/Section";
import "../assets/styles/main.scss";

class Home extends Component {
  render() {
    return (
      <>
        <h2>Welcome {this.props.user.name}</h2>
        <div className="home">
          <Section linkTo="/map" />
          <Section linkTo="/Networking" />
          <Section linkTo="/Profile" />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(Home);
