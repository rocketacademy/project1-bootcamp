import React from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from "@mui/material";

const tableHeading = {
  color: "black",
  fontSize: "13px",
  fontWeight: "bold",
  backgroundColor: "#f7ede2",
  lineHeight: "15px",
};

const PriceDescriptionList = ({ details, deleteItems }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={tableHeading}>Item</TableCell>
            <TableCell style={tableHeading}>Price</TableCell>
            <TableCell style={tableHeading}>Payer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((detail, index) => (
            <TableRow key={index.toString()}>
              <TableCell>{detail.description}</TableCell>
              <TableCell>${detail.price}</TableCell>
              <TableCell>{detail.payer}</TableCell>

              <TableCell>
                <button
                  onClick={() => deleteItems(index)}
                  style={{
                    backgroundColor: "#ffe0b2",
                    height: "35px",
                    color: "black",
                    fontWeight: "bold",
                    width: "35px",
                  }}
                >
                  x
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PriceDescriptionList;
