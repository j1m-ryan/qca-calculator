import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ grade, onClick }) => (
  <button onClick={onClick}>{grade}</button>
);

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const qca = totalScore / totalSubjects;
  const handleQCA = (grade) => () => {
    setTotalScore(totalScore + grades[grade]);
    setTotalSubjects(totalSubjects + 1);
  };
  return (
    <>
      <h1>QCA Calculator</h1>
      <p>QCA is {qca}</p>
      <p>Number of subjects: {totalSubjects}</p>
      <p>Total score {totalScore}</p>
      {Object.keys(grades).map((key) => (
        <Button grade={key} onClick={handleQCA(key)} />
      ))}
    </>
  );
};

const grades = {
  A1: 4,
  A2: 3.6,
  B1: 3.2,
  B2: 3.0,
  B3: 2.8,
  C1: 2.6,
  C2: 2.4,
  C3: 2.0,
  D1: 1.6,
  D2: 1.2,
  F: 0,
  NG: 0,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
