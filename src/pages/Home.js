import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    if (!localStorage.token) {
      this.props.history.push("/");
      return null;
    } else {
    return <div>Welcome {this.props.user.name}</div>;
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(Home);
