import React from "react";
import "./assets/styles/App.scss";

import { Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Authpage from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Flatiron Network</h1>

        <Switch>
          <Route
            path="/"
            render={(props) => (localStorage.token ? <Home {...props} /> : <Authpage {...props}/>)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
