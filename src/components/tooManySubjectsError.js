import React from "react";
import "../index.css";
const TooManySubjectsError = ({ year, tooManySubjestsInYear }) => {
  if (!tooManySubjestsInYear[year - 1]) return null;

  return (
    <>
      <h3 className="errorText">You already have 10 subjects in year {year}</h3>
    </>
  );
};
export default TooManySubjectsError;
