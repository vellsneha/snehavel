import { WASHINGTON_DC } from "../data/weatherGifs";
import { useWashingtonDCWeather } from "../hooks/useWashingtonDCWeather";
import "./WeatherGif.css";

export default function WeatherGif() {
  const weather = useWashingtonDCWeather();

  return (
    <div className="weather-gif">
      <img
        src={weather.gifSrc}
        alt=""
        className="weather-gif-media"
        aria-hidden="true"
      />

      <div className="weather-gif-overlay" aria-label="Current weather in Washington DC">
        <div className="weather-gif-overlay-inner">
          <p className="weather-gif-location">{WASHINGTON_DC.label}</p>
          {weather.temperatureF != null ? (
            <p className="weather-gif-temp">{weather.temperatureF}°F</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
