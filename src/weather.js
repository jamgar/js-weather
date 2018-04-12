import { zipcodeApiKey, openweatherApiKey } from '../env'

class Weather {
  constructor() {
    this.city = 'Dallas'
    this.state = 'TX'
  }

  // Get
  async getZipCode() {
    const response = await fetch(`https://www.zipcodeapi.com/rest/${zipcodeApiKey}/city-zips.json/${this.city}/${this.state}`)

    const responseData = await response.json()

    return responseData
  }

  async getWeather(zip) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},us&units=imperial&cnt=4&APPID=${openweatherApiKey}`)

    const responseData = await response.json()

    return responseData
  }

  changeLocation(city, state) {
    this.city = city
    this.state = state
  }
}

export const weather = new Weather();
