require('../node_modules/normalize.css/normalize.css')
require('./css/style.css')
import * as views from './views'

const openSideMenu = () => {
  document.getElementById('side-menu').style.height = '50%'
  document.getElementById('side-menu').style.width = '300px'
}

const closeSideMenu = () => {
  document.getElementById('side-menu').style.height = '0'
  document.getElementById('side-menu').style.width = '0'
}

const init = () => {
  document.getElementById('root').innerHTML = views.Header()

  const btnOpenSide = document.getElementById('btn-openSide')
  btnOpenSide.addEventListener('click', openSideMenu)

  const btnCloseSide = document.getElementById('btn-closeSide')
  btnCloseSide.addEventListener('click', closeSideMenu)
}



document.addEventListener('DOMContentLoaded', init)
