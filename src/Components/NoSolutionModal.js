import React from "react";

class NoSolutionModal extends React.Component {
  render() {
    const { closeModal } = this.props;
    return (
      <div className="nosolutionmodal-ctn">
        <div className="modal-ctn">
          <div className="modal-close-btn-ctn">
            <button onClick={closeModal}>&times;</button>
          </div>
          <div className="modal-title">
            <h1>No Solution Found</h1>
          </div>
          <div className="modal-body">
            <p>
              Uh-oh! The current grid has no solution. Please select New Game to
              load a new board.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoSolutionModal;
