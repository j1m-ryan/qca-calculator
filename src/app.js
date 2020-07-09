import React, { useState } from "react";
import Year from "./components/year";
import grades from "./grades";

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const [totalSubjectsPerYear, setTotalSubjectsPerYear] = useState(
    new Array(4).fill(0)
  );
  const [qcas, setQcas] = useState(new Array(4).fill(0));
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
  };
  return (
    <>
      <h1>QCA Calculator</h1>
      <p>{totalSubjects === 0 ? "Select your grades" : `QCA is ${qca}`}</p>
      <p>Total number of subjects: {totalSubjects}</p>
      <p>Total score {totalScore}</p>
      {totalSubjectsPerYear.map((s, i) => (
        <Year
          year={i + 1}
          qcas={qcas}
          handleQCA={handleQCA}
          totalSubjectsPerYear={totalSubjectsPerYear}
        />
      ))}
    </>
  );
};

export default App;
