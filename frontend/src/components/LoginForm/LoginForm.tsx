import React, { useState } from 'react'
import InputField from '../InputField/InputField'

export const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const buttonHandler = () =>{
    alert(user + " "+ password);
  }

  return (
    <div>
      <InputField setUserName={setUser} setPassword={setPassword} buttonHandler={buttonHandler} formName='Log in' />
    </div>
  )
}
