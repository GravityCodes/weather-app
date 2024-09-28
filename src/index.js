import "./JohanCSSReset.css";
import "./style.css";
import apiController from "./apiController";
import screenController from "./screenController";
import { format } from "date-fns";


const weather = new apiController("boston");


async function setWeatherData () {

    await weather.fetchData();
    let weatherDays = weather.getWeatherDays();
    let location = weather.getLocation().split(",").splice(0, 1);
    let currentWeather = [
      location,
      weatherDays[0].temp,
      weatherDays[0].tempmax,
      weatherDays[0].tempmin,
      weatherDays[0].icon,
      weatherDays[0].description
    ];

    screenController.addCurrentDayWeather(...currentWeather);
    screenController.clearNextDaysWeather();

    for (let i = 2; i < 15; i++) {
      screenController.addNextDaysWeather(
        format(new Date(weatherDays[i].datetime), "EEEE"),
        weatherDays[i].icon,
        weatherDays[i].temp
      );
    }
  
  
}

//Load default page
setWeatherData();

function searchCity() {
    weather.changeLocation(search.value);
    setWeatherData();
    search.value = "";
}
screenController.search.addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    searchCity();
  }
});
screenController.searchBtn.addEventListener("click", () => searchCity());
