import React from "react";

import { Button, Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const List = ({ list, deleteItems }) => {
  return (
    <>
      <ul>
        {list.map((listItem, index) => (
          <li key={index.toString()} style={{ listStyleType: "none" }}>
            <Stack direction="row">
              <label
                style={{
                  lineHeight: "10px",
                  width: "20px",
                }}
              >
                {listItem}
              </label>
              <Button
                onClick={() => deleteItems(index)}
                color="secondary"
                size="small"
                disableRipple
              >
                <ClearIcon />
              </Button>
            </Stack>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
