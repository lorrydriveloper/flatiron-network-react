import React from "react";
import Icon from "../assets/images/logout.svg";
import { connect } from "react-redux";
import { logout } from "../actions/Auth";

function Header(props) {
  return (
    <header>
      <h1>Flation Network</h1>
      {localStorage.token ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("state");
            props.logout();
            props.history.push("/");
          }}
        >
          <img src={Icon} alt="Logout" /> Log Out
        </button>
      ) : null}
    </header>
  );
}

export default connect(null, { logout })(Header);
