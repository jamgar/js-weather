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

export const Current = () => {
  return `
    <div id="current">
      <h1 id="location">City's Weather Today</h1>
      <h4>Wednesday April 11, 2018</h4>
      <h3 id="description">Sunny</h3>
      <h3 id="temp-string">68 F</h3>
      <img id="weather-icon" alt="current weather"/>
      <ul id="details">
        <li id="humidity">Relative Humidity: 30%</li>
        <li id="dewpoint">Feels Like: 52 F</li>
        <li id="feels-like">Dewpoint 68 F</li>
        <li id="wind">Wind: 15mph SE</li>
      </ul>
    </div>
  `
}

export const Forecast = () => {
  return `
    <div class="forecast">
      <div class="forecast-day">
        <h4>Thu</h4>
        <img id="forecast-icon" alt="forecast weather"/>
        <p class="forecast-temp">70 F</p>
      </div>
      <div class="forecast-day">
        <h4>Thu</h4>
        <img id="forecast-icon" alt="forecast weather"/>
        <p class="forecast-temp">70 F</p>
      </div>
      <div class="forecast-day">
        <h4>Thu</h4>
        <img id="forecast-icon" alt="forecast weather"/>
        <p class="forecast-temp">70 F</p>
      </div>
    </div>
  `
}
