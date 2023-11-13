import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { InputAdornment } from "@mui/material";

class WeightInput extends React.Component {
  handleChange = (e) => {
    this.props.updateWeightInput(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateWeightInput(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        <Box
          sx={{
            padding: "0px 32px 32px 32px",
            minWidth: "90px",
          }}
        >
          <TextField
            id="weight-input"
            variant="standard"
            color="info"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              style: { fontSize: "42px", fontWeight: "bold" },
            }}
          />
        </Box>
      </div>
    );
  }
}

export default WeightInput;
