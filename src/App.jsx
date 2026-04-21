/*
App.jsx: Main component that manages the selected city and displays the
CityList and CityForecast components.
*/

import { useState } from "react";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";

function App() {
  const [city, setCity] = useState("");

  return (
    <div>
      <h1>Weather App</h1>
      <CityList setCity={setCity} />
      {city && <CityForecast city={city} />}
    </div>
  );
}

export default App;;

