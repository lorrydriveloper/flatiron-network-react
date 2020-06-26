import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function Authpage(props) {
  const [toggle, setToggle] = useState(true);

  return toggle ? (
    <Login {...props} toggle={setToggle} />
  ) : (
    <SignUp {...props} toggle={setToggle} />
  );
}
