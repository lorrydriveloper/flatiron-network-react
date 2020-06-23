import React from "react";
import "./assets/styles/App.scss";
// import FirstComponent from "./components/FirstComponent";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <h1>Flatiron Network</h1>

        <Link to="/login"><button>Login</button></Link>
        <Link to="/Sign_up"><button>Signup</button></Link>

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign_up" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
