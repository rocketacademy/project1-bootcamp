import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { InputAdornment } from "@mui/material";

class AgeInput extends React.Component {
  handleChange = (e) => {
    this.props.updateAgeInput(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAgeInput(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Age
            <input type="text" name="age-input" onChange={this.handleChange} />
          </label>
        </form> */}
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            id="age-input"
            label="Age"
            variant="standard"
            onChange={this.handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">yo</InputAdornment>,
            }}
          />
        </Box>
      </div>
    );
  }
}

export default AgeInput;
