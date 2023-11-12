import React from "react";
import { Button, Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const PriceDescriptionList = ({ details, deleteItems }) => {
  return (
    <>
      <ul>
        {details.map((detail, index) => (
          <>
            <Stack direction="row">
              <li key={index.toString()}>
                Item: {detail.description}
                <br></br>
                Price: ${detail.price}
                <br></br>
                Payer: {detail.payer}
                <br></br>
                <br></br>
              </li>
              <Button
                onClick={() => deleteItems(index)}
                color="secondary"
                size="small"
                variant="contained"
                disableRipple
              >
                <ClearIcon />
              </Button>
            </Stack>
          </>
        ))}
      </ul>
    </>
  );
};

export default PriceDescriptionList;
