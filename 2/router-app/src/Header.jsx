import React from 'react'
import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {

  return (
    <>
    <Nav className='navbar navbar-expand-lg bg-dark'>
        <div className='navbar-brand text-white ms-5'>
          <h3>Router App</h3>
        </div>
        <div className='navv'>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link to='/' className='nav-link text-white'> Home </Link></li>

            <li className='nav-item ms-5'><Link to='/about-us' className='nav-link text-white'> About </Link></li>

            <li className='nav-item ms-5'><Link to='/services' className='nav-link text-white'> Services </Link></li>

            <li className='nav-item ms-5'><Link to='/gallery' className='nav-link text-white'> Gallery </Link></li>

            <li className='nav-item ms-5'><Link to='/contact' className='nav-link text-white'> Contact </Link></li>

            <li className='nav-item ms-5'><Link to='/shop' className='nav-link text-white'> Shop Now </Link></li>
          </ul>
        </div>
    </Nav>
    </>
  )
}

export default Header
