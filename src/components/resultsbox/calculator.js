import React from "react";
import { DrugList } from "../druglist";
import GridTable from "./gridtable";

export const DoseCalculator = ({ selectedDrug, weightInput, ageInput }) => {
  const dose = [];
  let minDose = 0;
  let maxDose = 0;
  let freq = "";

  // if ageRange.length ===1 then no need to do anything
  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drug = DrugList.find((drug) => drug.drugName === selectedDrug[i]);
    minDose = 0;
    maxDose = 0;
    freq = "";
    //if there are no age variations, no need to loop
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
    //before pushing into array, divide by frequency
    if (freq === "BD") {
      minDose = (minDose / 2).toFixed(2);
      maxDose = (maxDose / 2).toFixed(2);
    } else if (freq === "TDS") {
      minDose = (minDose / 3).toFixed(2);
      maxDose = (maxDose / 3).toFixed(2);
    } else if (freq === "QDS") {
      minDose = (minDose / 4).toFixed(2);
      maxDose = (maxDose / 4).toFixed(2);
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
    <>
      <GridTable dose={dose} />
    </>
  );
};
