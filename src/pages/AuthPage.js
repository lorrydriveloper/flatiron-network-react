import React, { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function Authpage(props) {
  const [toggle, setToggle] = useState(true);

  return toggle ? (
    <Login {...props} signup={setToggle} />
  ) : (
    <SignUp {...props} login={setToggle} />
  );
}
