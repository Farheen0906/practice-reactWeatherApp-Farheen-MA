/*
 CityList.jsx: Component to list cities and handle user selection.
*/

function CityList({ setCity} ) {
  const cities = ["NewYork", "London", "Tokyo", "Chicago"];

  return (
    <div>
      <h2>Select a City</h2>
    {/*creating an unordered list to display the city names, using map to iterate through the cities array 
    and creating a button to handle onClick EventHandler to display the weather info */}
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <button onClick={() => setCity(city)}>
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;