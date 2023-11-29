import React from "react";
import cx from "clsx";
import "./style.css";

const Checkbox = ({ label, name, onChange, className, checked }) => {
  return (
    <label className={cx("form-checkbox", className)}>
      <input
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );

  function handleChange(e) {
    onChange(name, !!e.target.checked);
  }
};

export default Checkbox;
