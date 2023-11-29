import React from "react";
import "./style.css";

const Submit = ({ label, name, ...props }) => {
  return (
    <button type="submit" className="btn-submit" {...props}>
      SUBMIT
    </button>
  );
};

export default Submit;
