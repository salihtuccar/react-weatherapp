const WeatherCard = ({ main, name, sys, weather, iconUrl }) => {
  return (
    <li className="city">
      <h2 className="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">
        ${Math.round(main.temp)}
        <sup>°C</sup>
      </div>
      <figure>
        <img className="city-icon" src="${iconUrlAWS}" />
        <figcaption>${weather[0].description}</figcaption>
      </figure>
    </li>
  );
};

export default WeatherCard;
