import React from "react";
import { druglist } from "../../druglist";
import GridTable from "./GridTable";

const determineDoseRange = (
  weightInput,
  minDosePerKg,
  maxDosePerKg,
  maxDailyDose,
  freq
) => {
  const minDosePerDay =
    weightInput * minDosePerKg >= maxDailyDose
      ? maxDailyDose
      : weightInput * minDosePerKg;

  const maxDosePerDay =
    weightInput * maxDosePerKg >= maxDailyDose
      ? maxDailyDose
      : weightInput * maxDosePerKg;
  const minDose = divideDoseByFreq(freq, minDosePerDay);
  const maxDose = divideDoseByFreq(freq, maxDosePerDay);
  return { minDose, maxDose };
};

const divideDoseByFreq = (freq, dose) => {
  switch (freq) {
    case "BD":
      return (dose / 2).toFixed(2);
    case "TDS":
      return (dose / 3).toFixed(2);
    case "QDS":
      return (dose / 4).toFixed(2);
    default:
      return 0;
  }
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
    const drug = druglist.find((drug) => drug.drugName === selectedDrug[i]); //find drug in master drug list
    //if there are no age variations, no need to loop
    if (!drug.weightBasedDosing) {
      if (drug.ageRange.length !== 1) {
        for (let k = 0; k < drug.ageRange.length; k += 1) {
          if (ageInput >= drug.ageRange[k]) {
            freq = drug.freq[k];
            minDose = drug.minDoseMgPerKg[k];
            maxDose = drug.maxDoseMgPerKg[k];
            minSyrup = convertToSyrup(drug.strength, minDose);
            maxSyrup = convertToSyrup(drug.strength, maxDose);
          }
        }
      } else {
        if (ageInput >= drug.ageRange) {
          freq = drug.freq;
          minDose = drug.minDoseMgPerKg;
          maxDose = drug.maxDoseMgPerKg;
          minSyrup = convertToSyrup(drug.strength, minDose);
          maxSyrup = convertToSyrup(drug.strength, maxDose);
        }
      }
    } else {
      if (drug.ageRange.length !== 1) {
        for (let j = 0; j < drug.ageRange.length; j += 1) {
          if (ageInput >= drug.ageRange[j]) {
            freq = drug.freq[j];
            ({ minDose, maxDose } = determineDoseRange(
              weightInput,
              drug.minDoseMgPerKg[j],
              drug.maxDoseMgPerKg[j],
              drug.maxDailyDose[j],
              freq
            ));
            minSyrup = convertToSyrup(drug.strength, minDose);
            maxSyrup = convertToSyrup(drug.strength, maxDose);
          }
        }
      } else {
        if (ageInput >= drug.ageRange) {
          freq = drug.freq;
          ({ minDose, maxDose } = determineDoseRange(
            weightInput,
            drug.minDoseMgPerKg,
            drug.maxDoseMgPerKg,
            drug.maxDailyDose,
            freq
          ));
          minSyrup = convertToSyrup(drug.strength, minDose);
          maxSyrup = convertToSyrup(drug.strength, maxDose);
        }
      }
    }

    const duplicateDrug = dose.find(
      (drug) => drug.drug.toLowerCase() === selectedDrug[i]
    );
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
  }

  console.log(dose);
  return (
    <>
      <GridTable dose={dose} />
    </>
  );
};
