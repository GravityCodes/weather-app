import "./JohanCSSReset.css";
import "./style.css";
import apiController from "./apiController";
import screenController from "./screenController";

const weather = new apiController("boston");

await weather.fetchData();

let weatherDays = weather.getWeatherDays();
let location = weather.getLocation().split(",").splice(0, 1);

console.log(location);

let currentWeather = [
  location,
  weatherDays[0].temp,
  weatherDays[0].tempmax,
  weatherDays[0].tempmin,
  weatherDays[0].icon,
  weatherDays[0].description,
];

screenController.addCurrentDayWeather(...currentWeather);
