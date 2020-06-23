import React from "react";
import "./assets/styles/App.scss";
// import FirstComponent from "./components/FirstComponent";
import Signup from "./components/SignUp";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <img src="app" alt="" />
      Learn React
      <Signup />
      <Login/>
    </div>
  );
}

export default App;
