//phil welsby - 27 sept 2021
import './App.css';
import React, {useState} from "react";
import { fetchRequest } from './utils';

const App = ()=> {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //call fetch request for creating user
  setData(fetchRequest(userName, email, pass, setData));

  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
    <input placeholder="UserName" onChange={(e)=> setUserName(e.target.value)} />
    <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
    <input placeholder="Password" onChange={(e) => setPass(e.target.value)} />
    <button type="submit">Submit</button>
      </form>
      <h1>{data ? data.name : 'No User'}</h1>
    </div>
  );
}

export default App;
