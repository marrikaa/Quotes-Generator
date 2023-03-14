import React, { useEffect, useState } from 'react'
import { getUsers } from '../../Client/client';
import InputField from '../InputField/InputField'
import { User } from '../../types';

type PropType = {
  isLogin : boolean;
  setIsLogin: (p :boolean) => void;
  setUserName: (str: string)=> void;
};

export const LoginForm = (props : PropType) => {
  const { isLogin, setIsLogin, setUserName } = props
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  
  const getUsersFromData = async () => setUsers(await getUsers());
  
  useEffect(()=> {
    getUsersFromData()
   } ,[])
   
  const buttonHandler = () => {
    if(users.filter((u :User) => u.userName === user && u.password === password).length === 1 ){
      setUserName(user);
      setIsLogin(true)
    }else{
      alert("userName or password is inccorect");
    }
  }

  return (
    <div>
     {!isLogin&&<InputField setUserName={setUser} setPassword={setPassword} buttonHandler={buttonHandler} formName='Log in' />}
      {isLogin && <h1>Welcome to our Quotes Generator</h1>}
    </div>
  )
}
