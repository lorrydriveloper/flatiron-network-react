import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="home" className="main-container">
        <h1>Welcome {this.props.user.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default connect(mapStateToProps)(Home);
