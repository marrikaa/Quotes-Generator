import { METHODS } from 'http';
import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { postUser } from '../../Client/client'; 

type PropType = {
  isLogin:boolean;
  setIsLogin: (p :boolean) => void;
};

const RegistrationForm = (props :PropType) => {
  const {isLogin, setIsLogin} =props
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const buttonHandler = () => {
    postUser({userName :user, password: password, favQuotes: []}, setIsLogin);
  }
  return (
    <div>
      {!isLogin &&<InputField setUserName={setUser} setPassword={setPassword} buttonHandler={buttonHandler} formName='Register' />}
      {isLogin && <h1>Registered succesfully, Welcome to our Quotes Generator</h1>}
    </div>
  )
}

export default RegistrationForm