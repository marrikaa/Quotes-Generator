import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

type PropType = {
  isLogin : boolean,
  setIsLogin: (p :boolean) => void,
}
const NavBar = (props : PropType) => {
  const{isLogin, setIsLogin} = props;

  const logOutHandler = () => {
    alert("Do you want to log out?")
    setIsLogin(false);
  }
  return (
    <div className='navbar'>
     <Link to='/' className='link nav-item'><div >Home</div></Link>
     <Link to='/search' className='link nav-item'><div >Search</div></Link>
     {!isLogin&&<Link to='/register' className='link nav-item'><div > Register</div></Link>}
     {!isLogin&&<Link to='/login' className='link nav-item'><div > Login</div></Link>}
     {isLogin&&<Link to='/quotesList' className='link nav-item'><div > My Qoutes List</div></Link>}
     {isLogin&&<div className='nav-item' onClick={logOutHandler}> Log out</div>}
    </div>
  )
}

export default NavBar