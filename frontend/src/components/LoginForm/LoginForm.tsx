import React, { useEffect, useState } from 'react'
import { getUsers } from '../../Client/client';
import InputField from '../InputField/InputField'
import { User } from '../../types';
import './LoginForm.css'

type PropType = {
  userName :string;
  setUserName: (str: string)=> void;
};

export const LoginForm = (props : PropType) => {
  const { userName, setUserName } = props
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
      window.sessionStorage.setItem('user', JSON.stringify(user));
    }else{
      alert("userName or password is inccorect");
    }
  }
  const handleKeyPress = (event :any ) => {
    if(event.key === 'Enter'){
      buttonHandler();
    }
  }
  const capitalize = (st :string) :string => st && st[0].toUpperCase() + st.slice(1)

  return (
    <div onKeyDownCapture={handleKeyPress}>
     {userName === "" &&<InputField setUserName={setUser} setPassword={setPassword} buttonHandler={buttonHandler} formName='Login' />}
      {userName !== "" && <p className="user-welcome">Welcome, dear {capitalize(user)}!</p>}
    </div>
  )
}
