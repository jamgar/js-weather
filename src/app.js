require('../node_modules/normalize.css/normalize.css')
require('./css/style.css')
import * as views from './views'

const init = () => {
  document.getElementById('root').innerHTML = views.Header()
}

document.addEventListener('DOMContentLoaded', init)
