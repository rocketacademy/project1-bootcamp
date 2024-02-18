import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { InputAdornment } from "@mui/material";

class AgeInput extends React.Component {
  handleChange = (e) => {
    this.props.updateAgeInput(e.target.value);
  };

  render() {
    return (
      <>
        <Box
          sx={{
            padding: "0px 32px 32px 32px",
            minWidth: "80px",
          }}
        >
          <TextField
            id="age-input"
            variant="standard"
            color="warning"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">yo</InputAdornment>,
              style: { fontSize: "42px", fontWeight: "bold" },
            }}
          />
        </Box>
      </>
    );
  }
}

export default AgeInput;
