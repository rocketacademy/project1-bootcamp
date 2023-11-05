import React from "react";

class DrugSearch extends React.Component {
  handleChange = (e) => {
    const newDrugSearch = e.target.value.toLowerCase();
    this.props.updateDrugSearch(newDrugSearch);
  };

  //not sure why this does not work
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newDrugSearch = e.target.value.toLowerCase();
  //   this.props.updateDrugSearch(newDrugSearch);
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateDrugSearch(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        <form onSubmit={this.handleSubmit}>
          <label>
            Drug Search
            <input
              type="text"
              name="search-input"
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default DrugSearch;
