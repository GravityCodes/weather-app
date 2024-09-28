import rain from "./assets/icons/rain.png";
import partlyCloudy from "./assets/icons/partlyCloudy.png";
import cloudy from "./assets/icons/cloudy.png";
import clearDay from "./assets/icons/clearDay.png";
import loadingGifUrl from "./assets/animations/loading.gif";

export default (() => {
  const $weatherCardItems = document.querySelectorAll(".current-weather-item");
  const $dailyWeatherContainer = document.querySelector(
    "#daily-weather-card-container",
  );
  const weatherIcons = {
    rain: rain,
    "partly-cloudy-day": partlyCloudy,
    cloudy: cloudy,
    "clear-day": clearDay,
  };
  const search = document.querySelector("#search");
  const searchBtn = document.querySelector(".search-btn");

  function addCurrentDayWeather(
    location,
    temperature,
    maxTemperature,
    minTemperature,
    weatherIcon,
    description
  ) {
    $weatherCardItems[0].textContent = location;
    $weatherCardItems[1].textContent = `${temperature}°F`;
    $weatherCardItems[2].textContent = `H: ${maxTemperature}°F`;
    $weatherCardItems[3].textContent = `L: ${minTemperature}°F`;
    $weatherCardItems[4].children[0].src = weatherIcons[weatherIcon];
    $weatherCardItems[5].textContent = description;
  }

  function addNextDaysWeather(Date, weatherIcon, temp) {
    let dayCard = document.createElement("div");
    dayCard.classList.add("daily-weather-card");

    let date = document.createElement("div");
    date.classList.add("daily-weather-card-date");
    date.textContent = Date;

    let weatherImgContainer = document.createElement("div");
    weatherImgContainer.classList.add("daily-weather-card-img-container");

    let weatherImg = document.createElement("img");
    weatherImg.src = weatherIcons[weatherIcon];
    weatherImg.alt = `${weatherIcon} icon`;

    weatherImgContainer.appendChild(weatherImg);

    let weatherTemp = document.createElement("div");
    weatherTemp.classList.add("daily-weather-card-temp");
    weatherTemp.textContent = `${temp}°F`;

    let leftSideContainer = document.createElement("div");
    leftSideContainer.classList.add("daily-weather-card-left-side-container");

    [date, weatherImgContainer].forEach((child) =>
      leftSideContainer.appendChild(child)
    );

    [leftSideContainer, weatherTemp].forEach((child) =>
      dayCard.appendChild(child)
    );

    $dailyWeatherContainer.appendChild(dayCard);
  }

  function clearNextDaysWeather () {
    $dailyWeatherContainer.textContent = "";
  }

  function showError(){
    const errorContainer = document.createElement("div");
    errorContainer.id = "error-card";

    const errorText = document.createElement("p");
    errorText.textContent = "Error: Could not get city.";
    
    errorContainer.appendChild(errorText);

    document.body.appendChild(errorContainer);

    setTimeout(() => {
      document.body.removeChild(errorContainer);
    },3000);
  }

  return { addCurrentDayWeather, addNextDaysWeather, clearNextDaysWeather, search, searchBtn, showError };
})();
