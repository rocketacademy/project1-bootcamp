# Where's That Ah?

_Where's That Ah?_ is a game inspired by [GeoGuessr](https://www.geoguessr.com/) that tests and improves your geographical knowledge of places around Singapore. I built this front-end web app as [Project 1](https://bootcamp.rocketacademy.co/1-frontend/1.p-frontend-app) for the [Rocket Academy Coding Bootcamp](https://www.rocketacademy.co/courses/coding-bootcamp).

Try it out [**here**](https://chengwaikoo.github.io/wheres-that/)!

## Usage

1. **Customise game settings**: Choose which type of places and how many places you'd like to guess.
2. **Start the game**: Click on the "Start" button.
3. **Guess the location**: You'll see a place name. Drop a pin on the Singapore map where you think the place is located.
4. **Submit your guess**: Click on the "Guess" button to confirm your pin location.
5. **See your score**: The closer your pin to the actual location, the higher your score. You'll see your total score after 5 rounds.

## Technologies Used

- HTML, CSS and React with [Create React App](https://create-react-app.dev/)
- [MapLibre GL JS](https://maplibre.org/projects/maplibre-gl-js/) for interactive map
- [MapTiler Cloud](https://www.maptiler.com/cloud/) for map tiles
- [Mantine UI](https://ui.mantine.dev/) for UI components
- [Turf](https://turfjs.org/) for distance calculation

## Running the App

To run the app on your local machine:

1. **Clone the repo**:

   ```bash
   git clone https://github.com/chengwaikoo/wheres-that.git
   ```

2. **Add your API key**: To access the MapTiler Cloud API, open `src/components/Map.js` and find this line:

   ```javascript
   style: `https://api.maptiler.com/maps/363b3c4e-0ad0-4a51-b858-c019423b9d2c/style.json?key=${process.env.REACT_APP_MAPTILER_KEY}`,
   ```

   Replace `${process.env.REACT_APP_MAPTILER_KEY}` with your own API key. Alternatively, create a `.env.local` file in the project directory, and define `REACT_APP_MAPTILER_KEY` as an environment variable there.

3. **Install dependencies**: Run `npm install` from the project directory.
4. **Start the app**: Run `npm start` from the project directory. The app opens in your web browser, and is accessible at [http://localhost:3000](http://localhost:3000).
