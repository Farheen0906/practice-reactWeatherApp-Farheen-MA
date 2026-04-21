function CityForecast({ city }) {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);
  useEffect(() => {
    if (!city) return;

    // simulate fetching data
    const data = weatherData[city];

    setForecast(data);
  }, [city]);

  const scrollToDetails = () => {
    detailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!forecast) {
    return <p>No weather data available.</p>;
  }

  return (
    <div>
      <h2>{city}'s' Weather Forecast</h2>

      {forecast ? (
        <>
          <p><strong>Summary:</strong> {forecast.summary}</p>

          <button onClick={scrollToDetails}>
            View Details
          </button>

          <div
            ref={detailsRef}
            style={{ marginTop: "40px", padding: "10px", border: "1px solid gray" }}
          >
            <h3>Detailed Forecast</h3>
            <p>{forecast.details}</p>
          </div>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default CityForecast;
