require('../node_modules/normalize.css/normalize.css')
require('./css/style.css')

import * as views from './views'
import { weather } from './weather'

const openSideMenu = () => {
  document.getElementById('side-menu').style.height = '100%'
  document.getElementById('side-menu').style.width = '300px'
}

const closeSideMenu = () => {
  document.getElementById('side-menu').style.height = '0'
  document.getElementById('side-menu').style.width = '0'
}

const getWeather = () => {
  weather.getZipCode()
    .then(results => {
      weather.getWeather(results.zip_codes[0])
      .then(results => {
        displayWeather(results)
      })
      .catch(error => console.log(error))
    })
    .catch(error => console.log(error))

}

const searchWeatherMain = () => {
  searchWeather('main')
}

const searchWeatherSide = () => {
  searchWeather('side')
}

const searchWeather = (location) => {
  const city = document.getElementById(`city-${location}`)
  const state = document.getElementById(`state-${location}`)

  weather.changeLocation(city.value, state.value)
  getWeather()

  // Clear input
  city.value = ''
  state.value = ''
}

const displayWeather = (weather) => {
  const root = document.getElementById('root')
  root.innerHTML = views.Header()
  root.innerHTML += views.Current(weather)
  root.innerHTML += views.Forecast(weather)
  const btnOpenSide = document.getElementById('btn-openSide')
  btnOpenSide.addEventListener('click', openSideMenu)

  const btnCloseSide = document.getElementById('btn-closeSide')
  btnCloseSide.addEventListener('click', closeSideMenu)

  document.getElementById('btn-main-search').addEventListener('click', searchWeatherMain)
  document.getElementById('btn-side-search').addEventListener('click', searchWeatherSide)
}

const init = () => {
  getWeather()
}


document.addEventListener('DOMContentLoaded', init)
