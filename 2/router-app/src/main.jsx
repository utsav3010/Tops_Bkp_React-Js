import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from '../About.jsx'
import Services from './Services.jsx'
import Gallery from './Gallery.jsx'
import Contact from './Contact.jsx'
import Shop from './Shop.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/about-us' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
