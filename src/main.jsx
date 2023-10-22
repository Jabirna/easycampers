import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={App}/>
      </Switch>
    </Router>
  </Provider>,
)
