import './App.css';
import {  Route, Router, Routes, useNavigate } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { LoginForm } from './components/LoginForm/LoginForm';




function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegistrationForm />}></Route>
        </Routes>
      </div>
      )
}
{/* <Link to='/' className='link nav-item'><div >Home</div></Link>
<Link to='/search' className='link nav-item'><div >Search</div></Link>
<Link to='/about' className='link nav-item'><div > Login</div></Link> */}
{/* <Link to='/register' className='link nav-item'><div > Register</div></Link> */}
export default App;