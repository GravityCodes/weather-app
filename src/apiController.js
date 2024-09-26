export default class {
  constructor(location) {
    this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LN6UDU35ETQ9B4CG3C36RJSGT`;
    this.response;
}

  changeLocation(location) {
    return (this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.split(" ").join("+")}?key=LN6UDU35ETQ9B4CG3C36RJSGT`);
  }

  async fetchData() {
    try {
      let response = await fetch(this.url);
      let responseJson = await response.json();

     // this.currentWeather = responseJson;

     this.response = responseJson;

    } catch (error) {
      console.error(error);
    }
  }

  getWeatherDays () {
    return this.response.days;
  }

  getLocation () {
    return this.response.resolvedAddress;
  }
}
