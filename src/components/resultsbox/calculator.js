import React from "react";
import { DrugList } from "../druglist";
import GridTable from "./gridtable";

const determineMinDose = (weightInput, minDosePerKg, maxDailyDose, freq) => {
  const minDosePerDay =
    weightInput * minDosePerKg >= maxDailyDose
      ? maxDailyDose
      : weightInput * minDosePerKg;
  const minDose = divideDoseByFreq(freq, minDosePerDay);
  return minDose;
};

const determineMaxDose = (weightInput, maxDosePerKg, maxDailyDose, freq) => {
  const maxDosePerDay =
    weightInput * maxDosePerKg >= maxDailyDose
      ? maxDailyDose
      : weightInput * maxDosePerKg;
  const maxDose = divideDoseByFreq(freq, maxDosePerDay);
  return maxDose;
};

const divideDoseByFreq = (freq, dose) => {
  let dividedDose = 0;
  if (freq === "BD") {
    dividedDose = (dose / 2).toFixed(2);
  } else if (freq === "TDS") {
    dividedDose = (dose / 3).toFixed(2);
  } else if (freq === "QDS") {
    dividedDose = (dose / 4).toFixed(2);
  }
  return dividedDose;
};

const convertToSyrup = (strength, mg) => {
  // = 1 divide by mgPerMl * mg
  let convertToMl = ((1 / strength) * mg).toFixed(2);
  return convertToMl;
};

export const DoseCalculator = ({ selectedDrug, weightInput, ageInput }) => {
  const dose = [];
  let minDose = 0;
  let maxDose = 0;
  let freq = "";
  let minSyrup = 0;
  let maxSyrup = 0;

  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drug = DrugList.find((drug) => drug.drugName === selectedDrug[i]); //find drug in master drug list
    //if there are no age variations, no need to loop
    if (drug.ageRange.length !== 1) {
      for (let j = 0; j < drug.ageRange.length; j += 1) {
        if (ageInput >= drug.ageRange[j]) {
          freq = drug.freq[j];
          minDose = determineMinDose(
            weightInput,
            drug.minDoseMgPerKg[j],
            drug.maxDailyDose[j],
            freq
          );
          maxDose = determineMaxDose(
            weightInput,
            drug.maxDoseMgPerKg[j],
            drug.maxDailyDose[j],
            freq
          );
          minSyrup = convertToSyrup(drug.strength, minDose);
          maxSyrup = convertToSyrup(drug.strength, maxDose);
        }
      }
    } else {
      freq = drug.freq;
      minDose = determineMinDose(
        weightInput,
        drug.minDoseMgPerKg,
        drug.maxDailyDose,
        freq
      );
      maxDose = determineMaxDose(
        weightInput,
        drug.maxDoseMgPerKg,
        drug.maxDailyDose,
        freq
      );
      minSyrup = convertToSyrup(drug.strength, minDose);
      maxSyrup = convertToSyrup(drug.strength, maxDose);
    }

    const duplicateDrug = dose.find((drug) => drug.drug === selectedDrug[i]);
    !duplicateDrug &&
      dose.push({
        drug: drug.drugName.charAt(0).toUpperCase() + drug.drugName.slice(1),
        strength: drug.strength + " MG/ML",
        minDose: minDose + " MG",
        minSyrup: minSyrup + " ML",
        maxDose: maxDose + " MG",
        maxSyrup: maxSyrup + " ML",
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
