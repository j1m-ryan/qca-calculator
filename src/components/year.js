import React from "react";
import Button from "./button";
import grades from "../grades";
import "../index.css";
const Year = ({
  year,
  qcas,
  handleQCA,
  totalSubjectsPerYear,
  gradeStrings,
  clearYear,
}) => {
  return (
    <div className="year">
      <h2>Year {year}</h2>
      <p>
        {totalSubjectsPerYear[year - 1] === 0
          ? `Enter your grades for year ${year}`
          : `Yearly QCA: ${qcas[year - 1] / totalSubjectsPerYear[year - 1]}`}
      </p>
      <p>Results : {gradeStrings[year - 1]}</p>
      <p>Total Subjects: {totalSubjectsPerYear[year - 1]}</p>
      <div className="keys">
        {Object.keys(grades).map((key) => (
          <Button grade={key} onClick={handleQCA(key, year)} key={key} />
        ))}
        <Button onClick={clearYear(year)} grade={"CLR"} />
      </div>
    </div>
  );
};

export default Year;
