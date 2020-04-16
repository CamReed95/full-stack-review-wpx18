import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/store'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
