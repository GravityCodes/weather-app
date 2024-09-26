export default (() => {
    function addCurrentDayWeather(location, temperature, maxTemperature, minTemperature, weatherIcon, description) {
    
    const $weatherCardItems = document.querySelectorAll(".current-weather-item");
    
    $weatherCardItems[0].textContent = location;
    $weatherCardItems[1].textContent = `${temperature}°`;
    $weatherCardItems[2].textContent = `H: ${maxTemperature}°`;
    $weatherCardItems[3].textContent = `L: ${minTemperature}°`;
    $weatherCardItems[4].textContent = weatherIcon;
    $weatherCardItems[5].textContent = description;
    

    
  }
  return { addCurrentDayWeather };
})();
