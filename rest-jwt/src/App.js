//phil welsby - 27 sept 2021
import './App.css';
import React, {useState} from "react";
import { fetchRequest, login } from './utils';
import { Login } from "./components/login"
import { SignUp } from './components/signUp';
// import { Notes } from "./components/notes";

const App = ()=> {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();
  // const [arr, SetArr] = useState([]);

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
      <SignUp setUserName={setUserName} setEmail={setEmail} setPass={setPass} submitHandler={submitHandler} />
      <Login setPass={setPass} setEmail={setEmail} loginHandler={loginHandler} />
      <h1>{data ? data.name: 'No User Logged In'}</h1>
      {/* <Notes title="Note 1"/> */}
      {/* <h1>{note}</h1> */}

    </div>
  );
}

export default App;
