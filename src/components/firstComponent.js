import React from "react";

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
