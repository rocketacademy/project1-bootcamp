import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function BasicTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          width: 1,
          "& th": {
            color: "rgb(255, 255, 255)",
          },
          "& td": {
            color: "rgb(255, 255, 255)",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#556259",
              borderBottom: "2px solid black",
            }}
          >
            <TableCell
              sx={{
                backgroundColor: "#39413B",
                borderRight: "2px solid black",
              }}
            >
              Date
            </TableCell>
            <TableCell align="right">Fuel(L)</TableCell>
            <TableCell align="right">Tripmeter(Km)</TableCell>
            <TableCell align="right">Km/L</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.date}
              sx={{
                borderBottom: "1.5px solid black",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  borderRight: "2px solid black",
                  backgroundColor: "#424C45",
                }}
              >
                {row.date}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: "#5F6D63",
                }}
              >
                {row.fuel}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: "#5F6D63",
                }}
              >
                {row.trip}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: "#5F6D63",
                }}
              >
                {row.consumption}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
