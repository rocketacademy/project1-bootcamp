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
    const minDose = weightInput * drug.minDoseMgPerKg;
    const maxDose = weightInput * drug.maxDoseMgPerKg;

    dose.push({
      drug: selectedDrug[i],
      minDose: minDose,
      maxDose: maxDose,
      freq: drug.freq,
    });
  }

  return (
    <div>
      <GridTable dose={dose} />
    </div>
  );
};
