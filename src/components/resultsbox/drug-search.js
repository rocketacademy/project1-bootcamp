import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import { DrugList } from "../druglist";
import { Button } from "@mui/material";

class DrugSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drugSearchValue: "",
    };
  }

  handleDrugSelect = (e, newValue) => {
    const newDrugSearch = newValue.toLowerCase();
    if (newDrugSearch) {
      this.props.updateDrugSearch(newDrugSearch);
      this.setState({ drugSearchValue: "" });
    }
  };

  handleResetSearch = (e) => {
    this.props.resetSearch();
    this.setState({ drugSearchValue: "" });
  };

  handleInputChange = (e, newInputValue) => {
    this.setState({
      drugSearchValue: newInputValue,
    });
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
            options={DrugList.map((option) => option.drugName).sort()}
            onChange={this.handleDrugSelect}
            value={this.state.drugSearchValue}
            inputValue={this.state.drugSearchValue}
            onInputChange={this.handleInputChange}
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

          <Button onClick={this.handleResetSearch} color="secondary">
            Reset
          </Button>
        </Box>
      </>
    );
  }
}

export default DrugSearch;
