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
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            id="weight-input"
            label="Weight"
            variant="standard"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Box>
      </div>
    );
  }
}

export default WeightInput;
