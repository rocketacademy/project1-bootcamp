import React from "react";
import { DrugList } from "../druglist";
import GridTable from "./gridtable";

export const DoseCalculator = ({ selectedDrug, weightInput }) => {
  //reference selected drug to drugList
  const dose = [];

  // for the searched drug, loop through druglist see if match the drug list
  // if match
  // retrieve input age and loop and compare to ageRange arr
  // if inputAge >= ageRange[i]
  // retrieve input weight and multiply min and max dose

  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drug = DrugList.find((drug) => drug.drugName === selectedDrug[i]);
    console.log(drug);
    console.log(weightInput);
    const minDose = weightInput * drug.minDoseMgPerKg;
    const maxDose = weightInput * drug.maxDoseMgPerKg;
    console.log(minDose);
    dose.push({
      drug: selectedDrug[i],
      minDose: minDose,
      maxDose: maxDose,
      freq: drug.freq,
    });
    console.log(dose);
  }

  return (
    <>
      {/* <table id="drug-table">
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Min Dose (mg)</th>
            <th>Max Dose (mg)</th>
            <th>Freq</th>
          </tr>
        </thead>
        <tbody>
          {dose.map((drug) => (
            <tr key={drug.drug}>
              <td>{drug.drug.toUpperCase()}</td>
              <td>
                {drug.freq === "BD"
                  ? (drug.minDose / 2).toFixed(2)
                  : drug.freq === "TDS"
                  ? (drug.minDose / 3).toFixed(2)
                  : drug.freq === "QDS"
                  ? (drug.minDose / 4).toFixed(2)
                  : drug.minDose + " /day"}
              </td>
              <td>
                {drug.freq === "BD"
                  ? (drug.maxDose / 2).toFixed(2)
                  : drug.freq === "TDS"
                  ? (drug.maxDose / 3).toFixed(2)
                  : drug.freq === "QDS"
                  ? (drug.maxDose / 4).toFixed(2)
                  : drug.maxDose + " /day"}
              </td>
              <td>{drug.freq}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <GridTable dose={dose} />
    </>
  );
};
