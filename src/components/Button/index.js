import React from "react";
import "./style.css";

function Button({ label, name, text, ...props }) {
  return (
    <label>
      <button type="button" className="btn-base" {...props}>
        {label}
      </button>
    </label>
  );
}

export default Button;
