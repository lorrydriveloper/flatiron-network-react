import React from "react";
import Section from "./Section";
import Network from "../assets/images/network.svg";
import Globe from "../assets/images/globe.svg";
import profile from "../assets/images/profile.svg";
import home from "../assets/images/home.svg";

export default function Navbar() {
  return (
    <nav>
      <Section linkTo="/" logo={home} display="Home" />
      <Section linkTo="/map" logo={Globe} display="Find Collegues" />
      <Section linkTo="/Networking" logo={Network} display="Networking" />
      <Section linkTo="/Profile" logo={profile} display="User acount" />
    </nav>
  );
}
