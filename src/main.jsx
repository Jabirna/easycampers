import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminPannel from './componets/Admin/AdminPannel.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
        <Routes>
          <Route path='/' exact basename="/" Component={App}/>
          <Route path='/admin' basename="/admin" Component={AdminPannel}/>
        </Routes>
    </Router>
  </Provider>,
)
