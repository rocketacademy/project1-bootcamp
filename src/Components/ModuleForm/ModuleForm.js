import React, { Component } from "react";

class ModuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: "1",
      userAction: "Add",
      moduleName: "",
      moduleList: JSON.parse(localStorage.getItem("moduleList")) || [],
      grade: "A",
      error: null,
    };
  }

  handleSubmit = (event) => {
    const { userAction, moduleList, moduleName, grade } = this.state;

    console.log("handleSubmit");

    // Add logic for adding modules
    if (userAction === "Add") {
      const newModule = { moduleName, grade };
      const searchTerm = moduleName;
      const existingModuleList = moduleList.filter(
        (module) => module.moduleName === searchTerm
      );
      if (existingModuleList.length > 0) {
        console.log("Remove duplicated module");
        this.setState({
          error: "Duplicate Module Name",
          moduleList: [...moduleList],
        });
        return;
      } else {
        this.setState({ error: null });
      }

      console.log("Add Module");
      this.setState(
        {
          moduleList: [...moduleList, newModule],
          moduleName: "",
          grade: this.state.grade,
          userAction: "Add",
        },
        () => {
          localStorage.setItem(
            "moduleList",
            JSON.stringify(this.state.moduleList)
          );
        }
      );

      // Add logic for updating modules
    } else if (userAction === "Update") {
      const newModule = { moduleName, grade };
      const updatedModuleList = moduleList.map((module) => {
        if (module.moduleName === newModule.moduleName) {
          return newModule;
        } else {
          return module;
        }
      });

      this.setState(
        {
          moduleList: updatedModuleList,
          moduleName: "",
          grade: "",
          userAction: "Update",
        },
        () => {
          localStorage.setItem(
            "moduleList",
            JSON.stringify(this.state.moduleList)
          );
        }
      );

      // Add logic for deleting modules
    } else if (userAction === "Delete") {
      const newModule = { moduleName, grade };
      const updatedModuleList = moduleList.filter(
        (module) => module.moduleName !== newModule.moduleName
      );
      this.setState(
        {
          moduleList: [...updatedModuleList],
          moduleName: "",
          grade: this.state.grade,
          userAction: "Delete",
        },
        () => {
          localStorage.removeItem("moduleList");
        }
      );
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
    const { enabled, userAction, moduleName, moduleList, grade, error } =
      this.state;
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
        {error && <div style={{ color: "red" }}>{error}</div>}
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
