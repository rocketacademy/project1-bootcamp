export const DrugList = [
  {
    drugName: "paracetamol",
    minDoseMgPerKg: 40,
    maxDoseMgPerKg: 60,
    maxDailyDose: 4000,
    strength: 24,
    freq: "QDS",
    ageRange: [0],
    weightBasedDosing: true,
    notes: "Avoid use under 3 months, neonatal pyrexia may warrant referral",
  },
  {
    drugName: "ibuprofen",
    minDoseMgPerKg: 15,
    maxDoseMgPerKg: 30,
    maxDailyDose: 1200,
    strength: 20,
    freq: "TDS",
    ageRange: [0],
    weightBasedDosing: true,
    notes: ">6mths >5kg",
  },
  {
    drugName: "chlorpheniramine",
    minDoseMgPerKg: [0.3, 0.3, 0.3],
    maxDoseMgPerKg: [0.3, 0.3, 0.3],
    maxDailyDose: [2, 2, 4],
    strength: 0.8,
    freq: ["TDS", "TDS", "TDS"],
    ageRange: [1, 2, 6],
    weightBasedDosing: true,
    notes: "",
  },
  {
    drugName: "cetirizine",
    minDoseMgPerKg: [0.5, 0.5, 0.5],
    maxDoseMgPerKg: [0.5, 0.5, 0.5],
    maxDailyDose: [2.5, 5, 10],
    strength: 1,
    freq: ["OD", "BD", "BD"],
    ageRange: [0.5, 1, 6],
    weightBasedDosing: false,
    notes: "",
  },
  {
    drugName: "amoxicillin",
    minDoseMgPerKg: [20, 25],
    maxDoseMgPerKg: [30, 50],
    maxDailyDose: [4000, 4000],
    strength: 25,
    freq: ["BD", "TDS"],
    ageRange: [0, 1 / 12],
    weightBasedDosing: true,
    notes: ">=2mo: Severe infection e.g. Otitis Media up to 90mg/kg/day q8h",
  },
  {
    drugName: "augmentin",
    minDoseMgPerKg: 28.6,
    maxDoseMgPerKg: 51.4,
    maxDailyDose: 1824,
    strength: 45.6,
    freq: "BD",
    ageRange: [3 / 12],
    weightBasedDosing: true,
    notes: "Mild-mod: 28.6mg/kg/day. Severe: 51.4mg/kg/day",
  },
  {
    drugName: "cephalexin",
    minDoseMgPerKg: 25,
    maxDoseMgPerKg: 50,
    maxDailyDose: 4000,
    strength: 25,
    freq: "QDS",
    ageRange: [0],
    weightBasedDosing: true,
    notes:
      "Mild-mod: 25-50mg/kg/day. Severe: 100mg/kg/day. Can dose TDS as well.",
  },
  {
    drugName: "prometazine",
    minDoseMgPerKg: 0.75,
    maxDoseMgPerKg: 1.5,
    maxDailyDose: 75,
    strength: 1,
    freq: "TDS",
    ageRange: [2],
    weightBasedDosing: true,
    notes: "Test5",
  },
];
