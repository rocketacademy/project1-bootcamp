export const DoseCalculator = ({ drugList, selectedDrug, weightInput }) => {
  const doses = [];
  //reference selected drug to drugList
  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drugSel = selectedDrug[i];
    const drug = drugList.find((drug) => drug.drugName === drugSel);
    const minDose = weightInput * drug.minDoseMgPerKg;
    //const maxDose = weightInput * drug.maxDoseMgPerKg;
    doses.push(minDose);
  }
  return doses;
};
