import React from "react";
import "./assets/styles/App.scss";
// import FirstComponent from "./components/FirstComponent";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Flatiron Network</h1>

        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/Sign_up">
          <button>Signup</button>
        </Link>

        <Switch>
          {/* <Route path='/'  /> */}
          <Route path="/login" component={Login} />
          <Route path="/sign_up" component={Signup} />
          <Route path="/Home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
