import React from "react";
import { NavLink } from "react-router-dom";

export default function Section({ linkTo, logo, display }) {
  return (
    <NavLink exact to={linkTo} activeClassName="selectedLink">
      <div className="section__link">
        <div className="link_container">
          <img src={logo} alt={display} />
          <h4 className="display">{display}</h4>
        </div>
      </div>
    </NavLink>
  );
}
