import { METHODS } from 'http';
import React, { useState } from 'react'
import InputField from '../InputField/InputField'

const RegistrationForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const buttonHandler = () =>{
    alert(user + " "+ password);
    fetch('http://localhost:3001/api/users', {
      method: "POST",
      body : JSON.stringify(
        {id: "3", 
        userName: user,  
        password: password, 
        favQuotes: []}
        ),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    })
  }
  return (
    <div>
      <InputField setUserName={setUser} setPassword={setPassword} buttonHandler={buttonHandler} formName='Register' />
    </div>
  )
}

export default RegistrationForm