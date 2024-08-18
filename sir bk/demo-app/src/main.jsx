import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import About from './About'
import Services from './OurServices'
import Contact from './Contact'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/about-us' element={<About />}></Route>
        <Route path='/our-services' element={<Services />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
