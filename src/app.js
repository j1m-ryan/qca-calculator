import React, { useState } from "react";
import Button from "./components/button";
import grades from "./grades";

const Year = ({ year, qcas, handleQCA, totalSubjectsPerYear }) => {
  console.log("total subjects", totalSubjectsPerYear);
  return (
    <>
      <h2>Results from year {year}</h2>
      <p>Yearly QCA: {qcas[year - 1]}</p>
      <p>Total Subjects: {totalSubjectsPerYear[year - 1]}</p>
      {Object.keys(grades).map((key) => (
        <Button grade={key} onClick={handleQCA(key, year)} key={key} />
      ))}
    </>
  );
};

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [totalSubjects, setTotalSubjects] = useState(0);
  const [totalSubjectsPerYear, setTotalSubjectsPerYear] = useState(
    new Array(4).fill(0)
  );
  const [qcas, setQcas] = useState([]);
  const qca = totalScore / totalSubjects;
  const handleQCA = (grade, year) => () => {
    setTotalScore(totalScore + grades[grade]);
    setTotalSubjects(totalSubjects + 1);
    let totalSubjectsPerYearCopy = [...totalSubjectsPerYear];
    totalSubjectsPerYearCopy[year - 1] += 1;
    setTotalSubjectsPerYear(totalSubjectsPerYearCopy);
    let arrayCopy = [...qcas];
    arrayCopy[year - 1] = grade;
    setQcas(arrayCopy);
  };
  return (
    <>
      <h1>QCA Calculator</h1>
      <p>{totalSubjects === 0 ? "Select your grades" : `QCA is ${qca}`}</p>
      <p>Total number of subjects: {totalSubjects}</p>
      <p>Total score {totalScore}</p>

      <Year
        year={1}
        qcas={qcas}
        handleQCA={handleQCA}
        totalSubjectsPerYear={totalSubjectsPerYear}
      />
    </>
  );
};

export default App;
