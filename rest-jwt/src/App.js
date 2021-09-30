//phil welsby - 27 sept 2021
import './App.css';
import React, {useState} from "react";
import { fetchRequest, login } from './utils';
import { Login } from "./components/login"

const App = ()=> {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //call fetch request for creating user
  setData(fetchRequest(userName, email, pass, setData));

  };

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, pass, setData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
    <input placeholder="UserName" onChange={(e)=> setUserName(e.target.value)} />
    <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
    <input placeholder="Password" type='password' onChange={(e) => setPass(e.target.value)} />
    <button type="submit">Submit</button>
      </form>
      <Login setPass={setPass} setEmail={setEmail} loginHandler={loginHandler} />
      {/* <h1>{data ? data.name : 'No User'}</h1> */}
      {/* <h1>{data ? data.email : 'No Email'}</h1> */}


      <h1>{data ? data.name: 'No User'}</h1>
      <h1>Logged In</h1>
    </div>
  );
}

export default App;
