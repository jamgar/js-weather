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
