import './App.css';
import {  Route, Routes } from "react-router-dom";
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
          <Route path="/register" element = {<RegistrationForm setIsLogin={setIsLogin} isLogin={isLogin} setUserName={setUserName} />}></Route>
          <Route path="/quotesList" element = {<FavQuotesList userName={userName} />}></Route>
          <Route path="/logout" element = {<LogOutText/>}></Route>
        </Routes>
      </div>
      )
}

export default App;