import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)
