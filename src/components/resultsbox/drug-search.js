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
      <>
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
      </>
    );
  }
}

export default DrugSearch;
