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
          <input type="text" id="city" placeholder="Enter City"/>
          <input type="text" id="state" placeholder="Enter State"/>
          <a href="#" class="btn-search"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </header>
    <div id="side-menu" class="side-nav">
      <a href="#" id="btn-closeSide">&times;</a>
      <div id="inputs">
      <input type="text" id="city" placeholder="Enter City"/>
      <input type="text" id="state" placeholder="Enter State"/>
      <a href="#" class="btn-search"><i class="fas fa-search"></i> Search</a>
      </div>
    </div>
  `
}

export const Current = (weather) => {
  const current = weather.list[0]
  return `
    <div id="current">
      <h1 id="location">${weather.city.name} Weather Today</h1>
      <h4>${Date(current.dt)}</h4>
      <h3 id="description">${current.weather[0].description.toUpperCase()}</h3>
      <h3 id="temp-string">${Math.floor(current.temp.day)} F</h3>
      <img id="weather-icon" src="http://openweathermap.org/img/w/${current.weather[0].icon}.png" alt="current weather"/>
      <ul id="details">
        <li id="humidity">Relative Humidity: ${current.humidity}%</li>
        <li id="wind">Wind: ${Math.floor(current.speed)}mph ${degToDirection(current.deg)}</li>
      </ul>
    </div>
  `
}

export const Forecast = (weather) => {
  const forecast = weather.list.slice(1).map((item) => {
    return `
      <div class="forecast-day">
        <h4>${Date(item.dt)}</h4>
        <img id="forecast-icon" src="http://openweathermap.org/img/w/${item.weather[0].icon}.png" alt="forecast weather"/>
        <p class="forecast-temp">${Math.floor(item.temp.day)} F</p>
      </div>
      `
  }).join('')

  return `
    <div class="forecast">
      ${forecast}
    </div>
  `
}
