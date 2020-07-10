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
      <h1>QCA Calculator</h1>
      <p>
        {totalSubjects === 0 ? "Select your grades" : `Overall QCA is ${qca}`}
      </p>
      <p>Total number of subjects: {totalSubjects}</p>
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
    </>
  );
};

export default App;
