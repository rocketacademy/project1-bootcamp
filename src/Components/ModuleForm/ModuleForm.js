import React, { Component } from "react";
import "./ModuleForm.css";
import { Button, ListGroup } from "react-bootstrap";
import ListGroupItem from "react-bootstrap";

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
          localStorage.setItem(
            "moduleList",
            JSON.stringify(this.state.moduleList)
          );
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

  calculateGPA = () => {
    const { moduleList } = this.state;
    const totalModules = moduleList.length;
    if (totalModules === 0) {
      return 0;
    }
    const totalGrades = moduleList.reduce((acc, module) => {
      switch (module.grade) {
        case "A":
          return acc + 5.0;
        case "A-":
          return acc + 4.5;
        case "B+":
          return acc + 4.0;
        case "B":
          return acc + 3.5;
        case "B-":
          return acc + 3.0;
        case "C+":
          return acc + 2.5;
        case "C":
          return acc + 2.0;
        case "D":
          return acc + 1.5;
        default:
          return acc;
      }
    }, 0);
    return totalGrades / totalModules;
  };

  render() {
    const { enabled, userAction, moduleName, moduleList, grade, error } =
      this.state;
    const gpa = this.calculateGPA();
    return (
      <div className="module-form-card">
        <form onSubmit={this.handleSubmit} className="module-form">
          <input
            type="text"
            value={moduleName}
            onChange={(e) => this.setState({ moduleName: e.target.value })}
            className="module-name"
            placeholder="Module Name"
          />

          <select
            type="text"
            value={grade}
            onChange={(e) => this.setState({ grade: e.target.value })}
            placeholder="Grade"
            className="grade-selector"
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
          <select
            value={userAction}
            onChange={this.handleActionChange}
            className="action-selector"
          >
            <option value="Add">Add Module</option>
            <option value="Update">Update Module</option>
            <option value="Delete">Delete Module</option>
          </select>
          <Button
            type="submit"
            className={enabled > 0 ? "button-enabled" : "button-disabled"}
            onClick={this.handleSubmit}
          >
            Let's go!
          </Button>
          {/* Display the module list */}
        </form>
        {error && <div className="error-message">{error}</div>}
        <h2 className="module-list-title"> Module List</h2>
        <div>
          <ListGroup className="module-list-item">
            {moduleList &&
              moduleList.map((module, index) => (
                <ListGroup.Item key={index}>{module.moduleName}</ListGroup.Item>
              ))}
            {moduleList &&
              moduleList.map((module, index) => (
                <ListGroup.Item key={index}>{module.grade}</ListGroup.Item>
              ))}
          </ListGroup>
        </div>
        {/* Display the GPA */}
        <div className="gpa-result">
          <h2>GPA: {gpa.toFixed(2)}</h2>
        </div>
      </div>
    );
  }
}

export default ModuleForm;
