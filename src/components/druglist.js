export const DrugList = [
  {
    drugName: "paracetamol",
    minDoseMgPerKg: 10,
    maxDoseMgPerKg: 15,
    maxDailyDose: 4000,
    freq: "QDS",
    ageRange: [1],
  },
  {
    drugName: "ibuprofen",
    minDoseMgPerKg: 5,
    maxDoseMgPerKg: 10,
    maxDailyDose: 1200,
    freq: "TDS",
    ageRange: [5],
  },
  {
    drugName: "chlorpheniramine",
    minDoseMgPerKg: 0.3,
    maxDoseMgPerKg: 0.3,
    maxDailyDose: [2, 4],
    freq: "TDS",
    ageRange: [1, 2, 6],
  },
  {
    drugName: "cetirizine",
    minDoseMgPerKg: 0.5,
    maxDoseMgPerKg: 0.5,
    maxDailyDose: [2.5, 5, 10],
    freq: ["OD", "BD", "TDS"],
    ageRange: [1, 2, 6],
  },
];
