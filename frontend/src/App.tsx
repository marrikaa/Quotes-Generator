import './App.css';
import {  Route, Router, Routes, useNavigate } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { LoginForm } from './components/LoginForm/LoginForm';
import { useState } from 'react';
import FavQuotesList from './components/FavQuotesList/FavQuotesList';
import { LogOutText } from './components/LogOut/LogOutText';



function App() {
  const[isLogin, setIsLogin] = useState<boolean>(false);
  const[userName, setUserName] = useState<string>("")

  return (
    <div className="App">
        <NavBar isLogin={isLogin} setIsLogin = {setIsLogin} />
        <Routes>
          <Route path="/" element={<Home isLogin={isLogin} userName={userName}  />}></Route>
          <Route path="/search" element = {<SearchPage isLogin={isLogin} userName={userName} />}></Route>
          <Route path="/login" element = {<LoginForm isLogin={isLogin} setIsLogin={setIsLogin} setUserName={setUserName} />}></Route>
          <Route path="/register" element = {<RegistrationForm setIsLogin={setIsLogin} isLogin={isLogin} />}></Route>
          <Route path="/quotesList" element = {<FavQuotesList userName={userName} />}></Route>
          <Route path="/logout" element = {<LogOutText/>}></Route>
        </Routes>
      </div>
      )
}
{/* <Link to='/' className='link nav-item'><div >Home</div></Link>
<Link to='/search' className='link nav-item'><div >Search</div></Link>
<Link to='/about' className='link nav-item'><div > Login</div></Link> */}
{/* <Link to='/register' className='link nav-item'><div > Register</div></Link> */}
export default App;