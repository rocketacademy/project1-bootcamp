import React from "react";

class DifficultyModal extends React.Component {
  render() {
    const {
      closeModal,
      handleNewGame,
      easyMaxEmptyCells,
      mediumMaxEmptyCells,
      hardMaxEmptyCells,
    } = this.props;
    return (
      <div className="difficultymodal-ctn">
        <div className="modal-ctn">
          <div className="modal-close-btn-ctn">
            <button onClick={closeModal}>&times;</button>
          </div>
          <div className="modal-title">
            <h2>Select your difficulty level</h2>
          </div>
          <div className="modal-body">
            <div className="difficulty-selection-ctn">
              <div
                className="difficulty easy"
                onClick={() => handleNewGame(easyMaxEmptyCells)}
              >
                <h3>Easy</h3>
              </div>

              <div
                className="difficulty medium"
                onClick={() => handleNewGame(mediumMaxEmptyCells)}
              >
                <h3>Medium</h3>
              </div>

              <div
                className="difficulty hard"
                onClick={() => handleNewGame(hardMaxEmptyCells)}
              >
                <h3>Hard</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DifficultyModal;
