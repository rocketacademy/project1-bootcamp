import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "drug", headerName: "Drug Name", width: 150 },
  { field: "minDose", headerName: "Min Dose (mg)", width: 130 },
  { field: "maxDose", headerName: "Max Dose (mg)", width: 130 },
  { field: "freq", headerName: "Freq", width: 80 },
  { field: "notes", headerName: "Notes", width: 350 },
];

const GridTable = ({ dose }) => {
  return (
    <DataGrid
      rows={dose}
      columns={columns}
      getRowId={(row) => row.drug}
      pageSize={5}
      autoHeight
      autoWidth
      checkboxSelection
    />
  );
};

export default GridTable;
