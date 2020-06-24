import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function Protectedroute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}
