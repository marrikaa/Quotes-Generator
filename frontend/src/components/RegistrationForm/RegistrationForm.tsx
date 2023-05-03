import React, { useState } from 'react'
import InputField from '../InputField/InputField'
import { postUser } from '../../Client/client'; 
import './Registration.css'

type PropType = {
  userName:string;
  setUserName: (str: string)=> void;
};

const RegistrationForm = (props :PropType) => {
  const { userName, setUserName} =props
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const buttonHandler = () => {
    postUser({userName : user, password: password, favQuotes: []});
    window.sessionStorage.setItem('user', JSON.stringify(user));
    setUserName(user);
  }

  const handleKeyPress = (event :any ) => {
    if(event.key === 'Enter'){
      buttonHandler();
    }
  }
  return (
    <div onKeyDownCapture={handleKeyPress}>
      {userName === "" &&<InputField setUserName={setUser} setPassword={setPassword} buttonHandler={buttonHandler} formName='Register' />}
      {userName !== "" && <p className="new-user-welcome">Registered succesfully, Welcome to our Quotes Generator</p>}
    </div>
  )
}

export default RegistrationForm