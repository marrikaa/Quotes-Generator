import React from 'react'
import './InputField.css'

type PropType = {
    setUserName: (str: string) => void;
    setPassword: (str: string) => void;
    buttonHandler: () => void;
    formName :String;
};

const InputField = (props : PropType ) => {
    const { setUserName , setPassword, buttonHandler, formName } = props;
    const userNameHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setUserName(event!.currentTarget.value);
    };

    const passwordHandler= (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event!.currentTarget.value);
    };

  return (
    <div className='inputField'>
        <h2>{formName} Form <hr /></h2>
        <label htmlFor='userName'><b>User Name</b></label>
        <input onChange={userNameHandler} type='text' placeholder='Enter userName'></input>
        <label htmlFor='lastName'><b>Password</b></label>
        <input onChange={passwordHandler} id='lastName' type="password" placeholder='Enter password'></input>
        {formName==="Register"&& <><label htmlFor='lastName'><b>Password</b></label>
        <input onChange={passwordHandler} id='lastName' type="password" placeholder='Enter password'></input></>}
        <button onClick={buttonHandler}>{formName}</button>
  </div>)
}

export default InputField