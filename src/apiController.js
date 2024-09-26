export default class {
    constructor(location) {
        this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LN6UDU35ETQ9B4CG3C36RJSGT`;
    }

    changeLocation (location) {

      return  this.url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.split(" ").join("+")}?key=LN6UDU35ETQ9B4CG3C36RJSGT`;
    }

    async getWeatherDays () {
        try
        {
            let response = await fetch(this.url);
            let responseJson = await response.json();
            
            return responseJson.days;

        } catch (error) {
            console.error(error);
        }
        
    }


}