import { Link } from 'react-router-dom'
import './NavBar.css'

type PropType = {
  userName : string,
  setUserName: (p :string) => void,
}
const NavBar = (props : PropType) => {
  const{userName, setUserName} = props;
  const logOutHandler = () => {
    window.sessionStorage.setItem('user', JSON.stringify(""));
    setUserName("");
  }

  return (
    <div className='navbar'>
     <Link to='/' className='link nav-item'><div >Home</div></Link>
     <Link to='/search' className='link nav-item'><div >Search</div></Link>
     {userName === "" && <Link to='/register' className='link nav-item'><div > Register</div></Link>}
     {userName === "" && <Link to='/login' className='link nav-item'><div > Login</div></Link>}
     {userName !== "" && <Link to='/quotesList' className='link nav-item'><div > My Quotes</div></Link>}
     {userName !== "" && <Link to='/'className='nav-item link'> <div onClick={logOutHandler}> Logout</div></Link>}
    </div>
  )
}

export default NavBar