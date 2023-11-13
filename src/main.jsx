import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { store } from './app/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminPannel from './componets/Admin/AdminPannel.jsx'
import { PrimeReactProvider } from 'primereact/api';



ReactDOM.createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path='/' exact basename="/" Component={App}/>
            <Route path='/admin' basename="/admin" Component={AdminPannel}/>
          </Routes>
      </Router>
    </Provider>
  </PrimeReactProvider>,
)
