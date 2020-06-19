/* eslint-disable no-console */
import React from "react";
import '../assets/styles/FirstComponent.scss'

export default function FirstComponent() {
  return (
    <div>
      <input onChange={() => console.log("hola")} type="text" />
      <button type="button" onClick={() => console.log("hola")}>
        Click me
      </button>
    </div>
  );
}
