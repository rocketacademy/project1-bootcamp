import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
  render() {
    const { grid, handleCellClick } = this.props;
    return (
      <table className="grid-table">
        <tbody>
          {grid &&
            grid.map((row, rowIndex) => {
              return (
                <div className="rows-ctn">
                  <tr className="row" key={rowIndex}>
                    {row.map((cell, columnIndex) => {
                      return (
                        <Cell
                          key={rowIndex + "-" + columnIndex}
                          cell={cell}
                          handleClickCallback={handleCellClick}
                        />
                      );
                    })}
                  </tr>
                </div>
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default Grid;
