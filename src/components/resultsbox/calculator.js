export const DoseCalculator = ({ drugList, selectedDrug, weightInput }) => {
  //reference selected drug to drugList
  const dose = [];

  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drugSel = selectedDrug[i];
    const drug = drugList.find((drug) => drug.drugName === drugSel);
    console.log(drug);
    console.log(weightInput);
    const minDose = weightInput * drug.minDoseMgPerKg;
    const maxDose = weightInput * drug.maxDoseMgPerKg;
    console.log(minDose);
    dose.push({
      drug: selectedDrug[i],
      minDose: minDose,
      maxDose: maxDose,
    });
    console.log(dose);
  }

  return (
    <table id="drug-table">
      <thead>
        <tr>
          <th>Drug Name</th>
          <th>Min Dose (mg/kg)</th>
          <th>Max Dose (mg/kg)</th>
        </tr>
      </thead>
      <tbody>
        {dose.map((drug) => (
          <tr key={drug.drug}>
            <td>{drug.drug}</td>
            <td>{drug.minDose}</td>
            <td>{drug.maxDose}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
