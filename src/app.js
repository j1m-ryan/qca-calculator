import React, { useState } from "react";
import Button from "./components/button";
import grades from "./grades";

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
      <p>{totalSubjects === 0 ? "Select your grades" : `QCA is ${qca}`}</p>
      <p>Number of subjects: {totalSubjects}</p>
      <p>Total score {totalScore}</p>
      {Object.keys(grades).map((key) => (
        <Button grade={key} onClick={handleQCA(key)} key={key} />
      ))}
    </>
  );
};

export default App;
