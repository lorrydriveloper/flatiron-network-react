import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Authpage from "./pages/AuthPage";

import Dashboard from "./components/Dashboard";
import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <div className="App">
        {props.auth ? <Dashboard {...props} /> : <Authpage {...props} />}
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
