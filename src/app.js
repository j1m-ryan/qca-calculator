import React, { useState } from "react";
import Year from "./components/year";
import grades from "./grades";
import "./index.css";
const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const [totalSubjectsPerYear, setTotalSubjectsPerYear] = useState(
    new Array(4).fill(0)
  );
  const [qcas, setQcas] = useState(new Array(4).fill(0));
  const [gradeStrings, setgradeStrings] = useState(new Array(4).fill(""));

  const qca = totalScore / totalSubjects;
  const handleQCA = (grade, year) => () => {
    setTotalScore(totalScore + grades[grade]);
    setTotalSubjects(totalSubjects + 1);
    let totalSubjectsPerYearCopy = [...totalSubjectsPerYear];
    totalSubjectsPerYearCopy[year - 1] += 1;
    setTotalSubjectsPerYear(totalSubjectsPerYearCopy);
    let qcasCopy = [...qcas];
    qcasCopy[year - 1] = grades[grade] + qcasCopy[year - 1];
    setQcas(qcasCopy);
    let gradeStringsCopy = [...gradeStrings];
    gradeStringsCopy[year - 1] += grade + " ";
    setgradeStrings(gradeStringsCopy);
  };

  const clearYear = (year) => () => {
    let totalSubjectsPerYearCopy = [...totalSubjectsPerYear];
    totalSubjectsPerYearCopy[year - 1] = 0;
    setTotalSubjectsPerYear(totalSubjectsPerYearCopy);
    let gradeStringsCopy = [...gradeStrings];
    gradeStringsCopy[year - 1] = "";
    setgradeStrings(gradeStringsCopy);
  };
  return (
    <>
      <div className="header">
        <img src="./ul.png" alt="ul logo" id="logo" />
        <h1 id="title">QCA Calculator</h1>
        <p></p>
      </div>
      <div className="topInfo">
        <p>
          {totalSubjects === 0 ? "Select your grades" : `Overall QCA is ${qca}`}
        </p>
        <p>Total number of subjects: {totalSubjects}</p>
      </div>
      <div className="yearsContainer">
        {totalSubjectsPerYear.map((s, i) => (
          <Year
            key={i}
            year={i + 1}
            qcas={qcas}
            handleQCA={handleQCA}
            totalSubjectsPerYear={totalSubjectsPerYear}
            gradeStrings={gradeStrings}
            clearYear={clearYear}
          />
        ))}
      </div>
    </>
  );
};

export default App;
