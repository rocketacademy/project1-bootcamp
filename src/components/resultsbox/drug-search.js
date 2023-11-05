import React from "react";

class DrugSearch extends React.Component {
  handleChange = (e) => {
    const newDrugSearch = e.target.value.toLowerCase();
    this.props.updateDrugSearch(newDrugSearch);
  };

  render() {
    return (
      <div className="input-box">
        <form>
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
