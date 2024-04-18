import axios from "axios";
import { useState } from "react";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getWeatherDataFromApi();
    setSearchText("");
  };

  const getWeatherDataFromApi = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const units = "metric";
    const lang = "tr";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;
    try {
      const response = await axios.get(url);
      const { main, name, sys, weather, id } = response.data;
      const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
      setData([{ main, iconUrl, id, sys, weather, name }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="main">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for a city"
          autoFocus
          value={searchText}
        />
        <button type="submit">SUBMIT</button>
        <span className="msg"></span>
      </form>
      <div className="container">
        <ul className="cities">
          {data.map((weatherData, index) => (
            <WeatherCard key={index} {...weatherData} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Main;
