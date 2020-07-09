import React from "react";

const Button = ({ grade, onClick }) => (
  <button onClick={onClick}>{grade}</button>
);

export default Button;
