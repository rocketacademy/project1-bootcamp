export const druglist = [
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
    drugName: "loratadine",
    minDoseMgPerKg: [5, 10],
    maxDoseMgPerKg: [5, 10],
    maxDailyDose: [5, 10],
    strength: 1,
    freq: ["OD"],
    ageRange: [2, 6],
    weightBasedDosing: false,
    notes: "Can convert OD to BD if prefer BD",
  },
  {
    drugName: "cetirizine",
    minDoseMgPerKg: [2.5, 2.5, 5],
    maxDoseMgPerKg: [2.5, 2.5, 5],
    maxDailyDose: [2.5, 5, 10],
    strength: 1,
    freq: ["OD", "BD", "BD"],
    ageRange: [0.5, 1, 6],
    weightBasedDosing: false,
    notes: "Can convert BD to OD if prefer OD",
  },
  {
    drugName: "dextromethorphan",
    minDoseMgPerKg: [3, 7.5, 15],
    maxDoseMgPerKg: [7.5, 15, 30],
    maxDailyDose: [30, 60, 120],
    strength: 3,
    freq: ["TDS", "TDS", "TDS"],
    ageRange: [2, 6, 12],
    weightBasedDosing: false,
    notes: "",
  },
  {
    drugName: "diphenhydramine",
    minDoseMgPerKg: [5, 10],
    maxDoseMgPerKg: [5, 10],
    maxDailyDose: [37.5, 75],
    strength: 2.8,
    freq: ["TDS", "TDS"],
    ageRange: [2, 6],
    weightBasedDosing: false,
    notes: "",
  },
  {
    drugName: "guaifenesin",
    minDoseMgPerKg: [50, 100, 200],
    maxDoseMgPerKg: [100, 200, 400],
    maxDailyDose: [600, 1200, 2400],
    strength: 20,
    freq: ["TDS", "TDS", "TDS"],
    ageRange: [2, 6, 12],
    weightBasedDosing: false,
    notes: "",
  },
  {
    drugName: "acetylcysteine",
    minDoseMgPerKg: [100, 600],
    maxDoseMgPerKg: [100, 600],
    maxDailyDose: [300, 600],
    strength: 0,
    freq: ["TDS", "OD"],
    ageRange: [2, 6],
    weightBasedDosing: false,
    notes:
      "2-6yo can dose BD/TDS. Comes in 100mg sachet or 600mg effervescent tab",
  },
  {
    drugName: "bromhexine",
    minDoseMgPerKg: [2, 4, 8],
    maxDoseMgPerKg: [2, 4, 8],
    maxDailyDose: [2, 4, 8],
    strength: 0.8,
    freq: ["TDS", "TDS", "TDS"],
    ageRange: [2, 6, 12],
    weightBasedDosing: false,
    notes: "",
  },
  {
    drugName: "salbutamol",
    minDoseMgPerKg: [1, 2, 2],
    maxDoseMgPerKg: [2, 2, 4],
    maxDailyDose: [12, 24, 32],
    strength: 0.4,
    freq: ["QDS", "QDS", "QDS"],
    ageRange: [2, 6, 14],
    weightBasedDosing: false,
    notes: "Can dose TDS-QDS",
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
    drugName: "clarithromycin",
    minDoseMgPerKg: 15,
    maxDoseMgPerKg: 15,
    maxDailyDose: 1000,
    strength: 25,
    freq: "BD",
    ageRange: [0.5],
    weightBasedDosing: true,
    notes: "Min age 6m. >=12yo: 10-20ml (250mg-500mg) BD",
  },
  {
    drugName: "cloxacillin",
    minDoseMgPerKg: 25,
    maxDoseMgPerKg: 50,
    maxDailyDose: 2000,
    strength: 25,
    freq: "QDS",
    ageRange: [0],
    weightBasedDosing: true,
    notes: "",
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
