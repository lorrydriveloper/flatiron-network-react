import React from "react";
import "./assets/styles/App.scss";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authpage from "./pages/AuthPage";
import Map from "./pages/Map";
import Networking from "./pages/Networking";
import Profile from "./pages/Profile";
import Protectedroute from "./helpers/ProtectedRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Flatiron Network</h1>
        <Switch>
          <Protectedroute path="/Map" component={Map} />
          <Protectedroute path="/Networking" component={Networking} />
          <Protectedroute path="/Profile" component={Profile} />
          <Route
            path="/"
            render={(props) =>
              localStorage.token ? <Home {...props} /> : <Authpage {...props} />
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
