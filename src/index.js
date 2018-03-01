import React from 'react'
import { render } from 'react-dom'
import Presentation from './presentation'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css'
import 'spectacle/lib/themes/default/index.js'
import './styles.css'

render(<Presentation />, document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
