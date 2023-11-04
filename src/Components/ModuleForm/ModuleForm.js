import React, { Component } from "react";

class ModuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: "1",
      userAction: "Add",
      moduleName: "",
      moduleList: [],
      grade: "A",
    };
  }

  handleSubmit = (event) => {
    const { userAction, moduleList, moduleName, grade } = this.state;

    console.log("handleSubmit");

    if (userAction === "Add") {
      //Add a new module to the list
      const newModule = { moduleName, grade };
      console.log("Add Module");
      this.setState(
        {
          moduleList: [...moduleList, newModule],
          moduleName: "",
          grade: "",
          userAction: "Add",
        },
        () => {
          localStorage.setItem(
            "moduleList",
            JSON.stringify(this.state.moduleList)
          );
        }
      );
    } else if (userAction === "Update") {
      console.log("Update Module");

      // Add logic for updating modules
    } else if (userAction === "Delete") {
      // Add logic for deleting modules
      console.log("Delete Module");
    }

    event.preventDefault();
  };

  handleActionChange = (event) => {
    this.setState({
      userAction: event.target.value,
    });
    console.log("Action Change");
    event.preventDefault();
  };

  render() {
    const { enabled, userAction, moduleName, moduleList, grade } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={userAction} onChange={this.handleActionChange}>
          <option value="Add">Add Module</option>
          <option value="Update">Update Module</option>
          <option value="Delete">Delete Module</option>
        </select>
        <input
          type="text"
          value={moduleName}
          onChange={(e) => this.setState({ moduleName: e.target.value })}
          placeholder="Module Name"
        />
        <select
          type="text"
          value={grade}
          onChange={(e) => this.setState({ grade: e.target.value })}
          placeholder="Grade"
        >
          Grade
          <option value="A">A: 5.00</option>
          <option value="A-">A-: 4.50</option>
          <option value="B+">B+: 4.00</option>
          <option value="B">B: 3.50</option>
          <option value="B-">B-: 3.00</option>
          <option value="C+">C+: 2.50</option>
          <option value="C">C: 2.00</option>
          <option value="D">D: 1.50</option>
        </select>
        <button
          type="submit"
          className={enabled > 0 ? "button-enabled" : "button-disabled"}
          onClick={this.handleSubmit}
        >
          Let's go!
        </button>

        {/* Display the module list */}
        <div>
          <h2>Module List</h2>
          <ul>
            {moduleList &&
              moduleList.map((module, index) => (
                <li key={index}>
                  {module.moduleName} - {module.grade}
                </li>
              ))}
          </ul>
        </div>
      </form>
    );
  }
}

export default ModuleForm;
