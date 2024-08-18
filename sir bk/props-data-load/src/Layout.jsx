import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Layout()
{
    return (
        <>
         <div className='nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/shop-now'>Shop Now</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/account'>Account</Link></li>
            </ul>
         </div>
         <Outlet />

        </>
    )
}
export default Layout