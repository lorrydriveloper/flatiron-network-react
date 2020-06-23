import React from "react";
import "../assets/styles/FloatLabelInput.scss";

export default function Floatlabelinput({ type = "text", resource, onChange, value }) {
  return (
    <div className="float_label">
      <input
        type={type}
        id={resource}
        name={resource}
        onChange={onChange}
        required={true}
        value={value}
      />
      <label htmlFor={resource}>{resource.replace('_',' ')}</label>
    </div>
  );
}
