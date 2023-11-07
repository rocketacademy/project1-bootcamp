import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import { DrugList } from "../druglist";

class DrugSearch extends React.Component {
  handleDrugSelect = (event, newValue) => {
    const newDrugSearch = newValue.toLowerCase();
    if (newDrugSearch) {
      this.props.updateDrugSearch(newDrugSearch);
    }
  };

  render() {
    return (
      <div className="input-box">
        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">
            Drug Search
            <input
              type="text"
              name="search-input"
              onChange={this.handleChange}
            />
          </label>
        </form> */}
        {/* <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="search-input"
            label="Drug Search"
            variant="standard"
            onChange={this.handleChange}
          />
        </Box> */}

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <Autocomplete
            freeSolo
            id="search-input"
            sx={{ width: "200px" }}
            disableClearable
            options={DrugList.map((option) => option.drugName)}
            onChange={this.handleDrugSelect}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Enter drug name..."
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                variant="standard"
              />
            )}
          />
        </Box>
      </div>
    );
  }
}

export default DrugSearch;
