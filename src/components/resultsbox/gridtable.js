import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "drug", headerName: "Drug Name", width: 150 },
  { field: "strength", headerName: "Strength", width: 130 },
  { field: "minDose", headerName: "Min Dose", width: 130 },
  { field: "minSyrup", headerName: "", width: 100 },
  { field: "maxDose", headerName: "Max Dose", width: 130 },
  { field: "maxSyrup", headerName: "", width: 100 },
  { field: "freq", headerName: "Freq", width: 100 },
  { field: "notes", headerName: "Notes", width: 300 },
];

const GridTable = ({ dose }) => {
  return (
    <DataGrid
      rows={dose}
      columns={columns}
      getRowId={(row) => row.drug}
      pageSize={5}
      autoHeight
      getRowHeight={() => "auto"}
    />
  );
};

export default GridTable;
