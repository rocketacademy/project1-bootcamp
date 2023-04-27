const DisplayMeal = (props) => {
  let display;
  const meal = props.meal;
  let mealTags = [];
  if (meal) {
    if (meal.TAGS) {
      const mealTagsArray = meal.TAGS.split(", ");
      mealTagsArray.forEach((tag) => {
        const tagLower = tag.toLowerCase();
        mealTags.push(
          <h4 key={tagLower} id={tagLower}>
            {tag}
          </h4>
        );
      });
    } else {
      mealTags = "";
    }

    display = (
      <div className="food-display">
        <p
          className="food-notes"
          id={meal.NOTES.includes("Haven't tried") ? "food-hearsay" : undefined}
        >
          {meal.NOTES}
        </p>
        <img src={meal.IMAGE} alt={meal.NAME} />
        <div id="food-details">
          <h1>{meal.NAME}</h1>
          <p>{meal.ADDRESS}</p>
          <div className="meal-tags">{mealTags}</div>
        </div>
      </div>
    );
  } else {
    display = (
      <div className="food-display">
        <h2>
          I couldn't
          <br />
          find anything
        </h2>
        <img id="logo-failed" src="./logos/icon-fail.svg" alt="logo" />
        <h2>
          that fits
          <br />
          your criteria
        </h2>
      </div>
    );
  }
  return display;
};

export default DisplayMeal;
