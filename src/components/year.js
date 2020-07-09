import React from "react";
import Button from "./button";
import grades from "../grades";

const Year = ({ year, qcas, handleQCA, totalSubjectsPerYear }) => {
  console.log("total subjects", totalSubjectsPerYear);
  return (
    <>
      <h2>Results from year {year}</h2>
      <p>
        {totalSubjectsPerYear[year - 1] === 0
          ? `Enter your grades for year ${year}`
          : `Yearly QCA: ${qcas[year - 1] / totalSubjectsPerYear[year - 1]}`}
      </p>
      <p>Total Subjects: {totalSubjectsPerYear[year - 1]}</p>
      {Object.keys(grades).map((key) => (
        <Button grade={key} onClick={handleQCA(key, year)} key={key} />
      ))}
    </>
  );
};

export default Year;
