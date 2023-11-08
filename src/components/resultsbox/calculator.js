import React from "react";
import { DrugList } from "../druglist";
import GridTable from "./gridtable";

export const DoseCalculator = ({ selectedDrug, weightInput, ageInput }) => {
  //reference selected drug to drugList
  const dose = [];
  let minDose = 0;
  let maxDose = 0;
  let freq = "";

  // for the searched drug, loop through druglist see if match the drug list
  // if match
  // retrieve input age and loop and compare to ageRange arr
  // if inputAge >= ageRange[i]
  // retrieve input weight and multiply min and max dose

  // if ageRange.length ===1 then no need to do anything
  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drug = DrugList.find((drug) => drug.drugName === selectedDrug[i]);
    minDose = 0;
    maxDose = 0;
    freq = "";
    if (drug.ageRange.length !== 1) {
      for (let j = 0; j < drug.ageRange.length; j += 1) {
        if (ageInput >= drug.ageRange[j]) {
          minDose =
            weightInput * drug.minDoseMgPerKg[j] >= drug.maxDailyDose[j]
              ? drug.maxDailyDose[j]
              : weightInput * drug.minDoseMgPerKg[j];
          maxDose =
            weightInput * drug.maxDoseMgPerKg[j] >= drug.maxDailyDose[j]
              ? drug.maxDailyDose[j]
              : weightInput * drug.maxDoseMgPerKg[j];
          freq = drug.freq[j];
        }
      }
    } else {
      minDose =
        weightInput * drug.minDoseMgPerKg >= drug.maxDailyDose
          ? drug.maxDailyDose
          : weightInput * drug.minDoseMgPerKg;
      maxDose =
        weightInput * drug.maxDoseMgPerKg >= drug.maxDailyDose
          ? drug.maxDailyDose
          : weightInput * drug.maxDoseMgPerKg;
      freq = drug.freq;
    }

    dose.push({
      drug: selectedDrug[i],
      minDose: minDose,
      maxDose: maxDose,
      freq: freq,
      notes: drug.notes,
    });
    console.log(dose);
  }

  return (
    <div>
      <GridTable dose={dose} />
    </div>
  );
};
