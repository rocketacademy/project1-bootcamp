export const PlayForm = ({
  diceOrder,
  handleChange,
  handleContinue,
  resetGame,
  isLastPlayer,
}) => {
  return (
    <form>
      <div className="inputBoxes">
        <label className="labelClass"> Dice Order: </label>
        <div onChange={handleChange}>
          <input type="radio" value="1" name="diceOrder" defaultChecked />1
          <input type="radio" value="2" name="diceOrder" />2
        </div>
        <br />
      </div>
      <div>
        <button
          className="button"
          onClick={handleContinue}
          disabled={isLastPlayer}
        >
          Continue
        </button>
        <button className="button" onClick={resetGame}>
          Reset
        </button>
      </div>
    </form>
  );
};
