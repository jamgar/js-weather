export const Header = () => {
  return `
    <header>
      <div id=search>
        <h1><i class="fas fa-sun"></i> Weather App</h1>
        <input type="text" id="city" placeholder="Enter City"/>
        <input type="text" id="state" placeholder="Enter State"/>
        <i class="fas fa-search" id="btn-search"></i>
      </div>
    </header>
  `
}
