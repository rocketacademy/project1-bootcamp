import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import { druglist } from "../../druglist";
import { Button } from "@mui/material";

class DrugSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drugSearchValue: "",
    };
  }

  handleDrugSelect = (e, newValue) => {
    if (newValue) {
      this.props.updateDrugSearch(newValue.toLowerCase());
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
            id="search-input"
            sx={{ width: "200px" }}
            disableClearable
            options={druglist
              .map(
                (option) =>
                  option.drugName.charAt(0).toUpperCase() +
                  option.drugName.slice(1)
              )
              .sort()}
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
