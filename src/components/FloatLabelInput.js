import React from "react";
import "../assets/styles/FloatLabelInput.scss";

export default function Floatlabelinput({ type = "text", resource, onChange, value, required=true }) {
  return (
    <div className="float_label">
      <input
        type={type}
        id={resource}
        name={resource}
        onChange={onChange}
        required={required}
        value={value}
      />
      <label htmlFor={resource}>{resource.replace('_',' ')}</label>
    </div>
  );
}
