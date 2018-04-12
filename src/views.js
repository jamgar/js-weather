import moment from 'moment'

const degToDirection = (num) => {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

export const Header = () => {
  return `
    <header>
      <div id=search>
        <span class="open-slide">
          <a href="#" id="btn-openSide">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#3a3a3a" stroke-width="5"/>
              <path d="M0,14 30,14" stroke="#3a3a3a" stroke-width="5"/>
              <path d="M0,23 30,23" stroke="#3a3a3a" stroke-width="5"/>
            </svg>
          </a>
        </span>
        <h1><i class="fas fa-sun"></i> Weather App</h1>
        <div id="main-search">
          <input type="text" id="city-main" placeholder="Enter City"/>
          <input type="text" id="state-main" placeholder="Enter State"/>
          <a href="#" id="btn-main-search"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </header>
    <div id="side-menu" class="side-nav">
      <a href="#" id="btn-closeSide">&times;</a>
      <div id="inputs">
      <input type="text" id="city-side" placeholder="Enter City"/>
      <input type="text" id="state-side" placeholder="Enter State"/>
      <a href="#" id="btn-side-search"><i class="fas fa-search"></i> Search</a>
      </div>
    </div>
  `
}

export const Current = (weather) => {
  // Get current days data
  const current = weather.list[0]
  // Format date with moment
  const currentDay = moment(Date(current.dt)).format('ddd')
  const currentDate = moment(Date(current.dt)).format('MMM Do YY')

  return `
    <div id="current">
      <h1 id="location">${weather.city.name} Today</h1>
      <h4>${currentDay} ${currentDate}</h4>
      <h3 id="description">${current.weather[0].description.toUpperCase()}</h3>
      <div class="temp-desc">
        <h3 id="temp-string">${Math.floor(current.temp.day)} F</h3>
        <img id="weather-icon" src="http://openweathermap.org/img/w/${current.weather[0].icon}.png" alt="current weather"/>
      </div>
      <ul id="details">
        <li id="humidity">Relative Humidity: ${current.humidity}%</li>
        <li id="wind">Wind: ${Math.floor(current.speed)}mph ${degToDirection(current.deg)}</li>
      </ul>
    </div>
  `
}

export const Forecast = (weather) => {
  // Remove current day from array
  weather = weather.list.slice(1)

  const forecast = weather.map((item, index) => {
    // Format date with moment
    let forecastDay = moment().add(index + 1, 'days').format('ddd')
    let forecastDate = moment().add(index + 1, 'days').format('MMM Do YY')

    return `
      <div class="forecast-day">
        <h4>${forecastDay} ${forecastDate}</h4>
        <div class="temp-desc">
          <p class="forecast-temp">${Math.floor(item.temp.day)} F</p>
          <img class="forecast-icon" src="http://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="forecast weather"/>
        </div>
      </div>
      `
  }).join('')

  return `
    <div class="forecast">
      ${forecast}
    </div>
  `
}
