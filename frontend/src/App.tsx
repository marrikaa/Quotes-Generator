import './App.css';
import {  Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import { LoginForm } from './components/LoginForm/LoginForm';
import { useEffect, useState } from 'react';
import FavQuotesList from './components/FavQuotesList/FavQuotesList';
import { LogOutText } from './components/LogOut/LogOutText';



function App() {
  const[userName, setUserName] = useState<string>("")
  
  useEffect(()=>{
    if(window.sessionStorage.getItem('user') !== null){
      setUserName(JSON.parse(window.sessionStorage.getItem('user')!))
    } else{
      window.sessionStorage.setItem('user', JSON.stringify(""));
    } 
  },[])

  return (
    <div className="App">
        <NavBar setUserName = {setUserName} userName ={userName} />
        <Routes>
          <Route path="/" element={<Home userName={userName}  />}></Route>
          <Route path="/search" element = {<SearchPage userName={userName} />}></Route>
          <Route path="/login" element = {<LoginForm userName = {userName} setUserName={setUserName} />}></Route>
          <Route path="/register" element = {<RegistrationForm userName={userName} setUserName={setUserName} />}></Route>
          <Route path="/quotesList" element = {<FavQuotesList userName = {userName} />}></Route>
          <Route path="/logout" element = {<LogOutText/>}></Route>
        </Routes>
      </div>
      )
}

export default App;