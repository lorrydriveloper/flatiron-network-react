import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import Authpage from "./pages/AuthPage";
import Map from "./pages/GoogleMap";
import Networking from "./pages/Networking";
import Profile from "./pages/Profile";
import Protectedroute from "./helpers/ProtectedRoute";
import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar.notused";
import { connect } from "react-redux";

function App(props) {
  return (
    <Router>
      <div className="App">
        {props.auth ? <Dashboard /> : <Authpage {...props} />}
        <Switch>
          <Protectedroute path="/Map" component={Map} />
          <Protectedroute path="/Networking" component={Networking} />
          <Protectedroute path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
