import React from "react";
import { Link } from "react-router-dom";

export default function Section({ linkTo, logo, display }) {
  return (
    <Link to={linkTo}>
      <div className="section__link">
        <span className={logo}>{logo}</span>
        <span className={logo}>{display}</span>
      </div>
    </Link>
  );
}
