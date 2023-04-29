import React, { useState } from "react";
import {
  BsEmojiSmile,
  BsEmojiExpressionless,
  BsEmojiFrown,
} from "react-icons/bs";

const FormMood = (props) => {
  return (
    <div>
      <form className="grid grid-cols-1 gap-3 text-xl text-dark-pink text-left font-light p-3 m-1 w-80 bg-white drop-shadow-lg rounded-xl">
        <label for="mood">Date:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="date"
          id="mood-date"
          required
          placeholder=""
          value={props.moodDate}
          onChange={props.onDateChange}
          name="moodDate"
        />
        <label>Time:</label>
        <input
          className="border-solid border-2 border-dark-pink rounded"
          type="time"
          id="mood-time"
          required
          placeholder=""
          value={props.moodTime}
          onChange={props.onTimeChange}
          name="moodTime"
        />
        <fieldset>
          <legend>How do you feel now?</legend>
          <div className="flex align-center justify-evenly">
            <div>
              <input
                className=" border-dark-pink rounded"
                type="radio"
                id="5"
                value="Good"
                checked={props.checked.good}
                onChange={props.onMoodChange}
                onClick={props.onChecked}
                name="mood"
              />
              <label for="good" className=" text-green-400 text-6xl">
                <BsEmojiSmile />
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="3"
                value="Neutral"
                checked={props.checked.neutral}
                onChange={props.onMoodChange}
                onChangeId={props.onMoodIDChange}
                onClick={props.onChecked}
                name="mood"
              />
              <label for="neutral" className="text-yellow-500 text-6xl">
                <BsEmojiExpressionless />
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="1"
                value="Bad"
                checked={props.checked.bad}
                onChange={props.onMoodChange}
                onChangeId={props.onMoodIDChange}
                onClick={props.onChecked}
                name="mood"
              />
              <label for="bad" className="text-6xl">
                <BsEmojiFrown />
              </label>
            </div>
          </div>
        </fieldset>
      </form>
      {/* <p>{props.moodDate}</p>
      <p>{props.moodTime}</p>
      <p>{props.mood}</p> */}
    </div>
  );
};

export default FormMood;
