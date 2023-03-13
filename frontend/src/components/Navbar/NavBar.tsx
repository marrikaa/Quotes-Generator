import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
     <Link to='/' className='link nav-item'><div >Home</div></Link>
     <Link to='/search' className='link nav-item'><div >Search</div></Link>
     <Link to='/register' className='link nav-item'><div > Register</div></Link>
     <Link to='/login' className='link nav-item'><div > Login</div></Link>
     
    </div>
  )
}

export default NavBar