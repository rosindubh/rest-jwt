//phil welsby - 27 sept 2021
import './App.css';
import React, {useState} from "react";
import { fetchRequest } from './utils';

const App = ()=> {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //call fetch request for creating user
    fetchRequest(userName, email, pass);

  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
    <input placeholder="UserName" onChange={(e)=> setUserName(e.target.value)} />
    <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
    <input placeholder="Password" onChange={(e) => setPass(e.target.value)} />
    <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
