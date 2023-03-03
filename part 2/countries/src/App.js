import { useState, useEffect } from "react";
import getAll from "./services/Weather";
import getCountries from "./services/Countries";

function App() {
  const [countries, setCountries] = useState("");
  const [search, setSearch] = useState("");
  const [filters, setFilter] = useState([]);
  const [Weather, setWeather] = useState("");

  useEffect(() => {
    getCountries().then(response => {
      setCountries(response);
      console.log("countries loaded from server ");
    } );
  }, [])

  const handleChange = (event) => { 
    setSearch(event.target.value);
    setFilter(countries.filter(country => country.name.common.toLowerCase().startsWith(event.target.value.toLowerCase()) ))
  }

  const handelShow = (name) => {
    setFilter(countries.filter(country => country.name.common === name))
  }

  if (search.length !== 0 && filters.length === 1 && Weather==="") {
    console.log("loading weather", filters[0].capital);
    getAll(filters[0].capital).then(response => { 
      setWeather({ "temp": response.main.temp, "wind": response.wind.speed , "img": response.weather[0].icon });
      console.log({ "temp": response.main.temp, "wind": response.wind.speed,"img": response.weather[0].icon });
    })
  }

  return (
    <div>
      Find Countries: <input onChange={handleChange} value={search} type="text" />
      {search.length !== 0 && filters.length > 10 && <p>Too many matches, specify another filter</p>}
      {search.length !== 0 && filters.length <= 10 && filters.length > 1
        && filters.map(country => <p key={country.cca3}>{country.name.common} <button onClick={()=>handelShow(country.name.common)}>show</button> </p>)}

      {search.length !== 0 && filters.length === 1 && <div>
        <h2>{filters[0].name.common}</h2>
        <p>capital {filters[0].capital}</p>
        <p>area    {filters[0].area}</p>
        <h3>languages</h3>
        <ul>
          {Object.entries(filters[0].languages).map(([key, value]) => <li key={key}>{value}</li>)}
        </ul>
        <img src={filters[0].flags.png} alt="flag of country" />

        <h2>Weather in {filters[0].capital}</h2>
        <p>temperature {Weather.temp} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${Weather.img}@2x.png`} alt="weatherImage" />
        <p>wind { Weather.wind} m/s</p>
      </div>}
      

    </div>
  );
}

export default App;
