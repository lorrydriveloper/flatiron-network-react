import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>Welcome {this.props.user.name}</div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps)(Home);
