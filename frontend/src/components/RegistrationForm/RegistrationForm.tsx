import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { postUser } from '../../Client/client'; 
import './Registration.css'

type PropType = {
  isLogin:boolean;
  setIsLogin: (p :boolean) => void;
  setUserName: (str: string)=> void;
};

const RegistrationForm = (props :PropType) => {
  const {isLogin, setIsLogin, setUserName} =props
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const buttonHandler = () => {
    postUser({userName : user, password: password, favQuotes: []}, setIsLogin);
    setUserName(user);
  }

  const handleKeyPress = (event :any ) => {
    if(event.key === 'Enter'){
      buttonHandler();
    }
  }
  return (
    <div onKeyDownCapture={handleKeyPress}>
      {!isLogin &&<InputField setUserName={setUser} setPassword={setPassword} buttonHandler={buttonHandler} formName='Registration' />}
      {isLogin && <p className="new-user-welcome">Registered succesfully, Welcome to our Quotes Generator</p>}
    </div>
  )
}

export default RegistrationForm