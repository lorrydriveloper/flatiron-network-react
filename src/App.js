import React from "react";
// import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Authpage from "./pages/AuthPage";
// import Map from "./pages/Map";
// import Networking from "./pages/Networking";
// import Profile from "./pages/Profile";
// import Protectedroute from "./helpers/ProtectedRoute";
import Header from "./components/Header";
// import Navbar from "./components/Navbar.notused";
import { connect } from "react-redux";

function App(props) {
  return (
    // <Router>
    <div className="App">
      {props.auth ? <Header /> : <Authpage {...props} />}
      {/* <Switch>
          <Protectedroute path="/Map" component={Map} />
          <Protectedroute path="/Networking" component={Networking} />
          <Protectedroute path="/Profile" component={Profile} />
          <Route
            path="/"
            render={(props) =>
              localStorage.token ? <Home {...props} /> : <Authpage {...props} />
            }
          />
        </Switch> */}
    </div>
    // </Router>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
