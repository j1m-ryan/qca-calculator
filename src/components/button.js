import React from "react";
import "../index.css";
const Button = ({ grade, onClick }) => (
  <button onClick={onClick} className="btn">
    {grade}
  </button>
);

export default Button;
