import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DrugList } from "../druglist";

export const DoseCalculator = ({ selectedDrug, weightInput }) => {
  //reference selected drug to drugList
  const dose = [];

  for (let i = 0; i < selectedDrug.length; i += 1) {
    const drug = DrugList.find((drug) => drug.drugName === selectedDrug[i]);
    console.log(drug);
    console.log(weightInput);
    const minDose = weightInput * drug.minDoseMgPerKg;
    const maxDose = weightInput * drug.maxDoseMgPerKg;
    console.log(minDose);
    dose.push({
      drug: selectedDrug[i],
      minDose: minDose,
      maxDose: maxDose,
      freq: drug.freq,
    });
    console.log(dose);
  }

  return (
    <>
      {/* <table id="drug-table">
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Min Dose (mg)</th>
            <th>Max Dose (mg)</th>
            <th>Freq</th>
          </tr>
        </thead>
        <tbody>
          {dose.map((drug) => (
            <tr key={drug.drug}>
              <td>{drug.drug.toUpperCase()}</td>
              <td>
                {drug.freq === "BD"
                  ? (drug.minDose / 2).toFixed(2)
                  : drug.freq === "TDS"
                  ? (drug.minDose / 3).toFixed(2)
                  : drug.freq === "QDS"
                  ? (drug.minDose / 4).toFixed(2)
                  : drug.minDose + " /day"}
              </td>
              <td>
                {drug.freq === "BD"
                  ? (drug.maxDose / 2).toFixed(2)
                  : drug.freq === "TDS"
                  ? (drug.maxDose / 3).toFixed(2)
                  : drug.freq === "QDS"
                  ? (drug.maxDose / 4).toFixed(2)
                  : drug.maxDose + " /day"}
              </td>
              <td>{drug.freq}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Drug Name</TableCell>
              <TableCell align="right">Min Dose (mg)</TableCell>
              <TableCell align="right">Max Dose (mg)</TableCell>
              <TableCell align="right">Freq</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dose.map((drug) => (
              <TableRow
                key={drug.drug}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {drug.drug.toUpperCase()}
                </TableCell>
                <TableCell align="right">
                  {drug.freq === "BD"
                    ? (drug.minDose / 2).toFixed(2)
                    : drug.freq === "TDS"
                    ? (drug.minDose / 3).toFixed(2)
                    : drug.freq === "QDS"
                    ? (drug.minDose / 4).toFixed(2)
                    : drug.minDose + " /day"}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  {drug.freq === "BD"
                    ? (drug.maxDose / 2).toFixed(2)
                    : drug.freq === "TDS"
                    ? (drug.maxDose / 3).toFixed(2)
                    : drug.freq === "QDS"
                    ? (drug.maxDose / 4).toFixed(2)
                    : drug.maxDose + " /day"}
                </TableCell>
                <TableCell align="right">{drug.freq}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
