import "./App.css";
import person from "./img/person.jpeg";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { React, useState } from "react";
// import validator from "validator";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  // const validateEmail = (e) => {
  //   let email = e.target.value;

  //   if (validator.isEmail(email)) {
  //     setEmailError("Valid Email :)");
  //   } else {
  //     setEmailError("Enter valid Email!");
  //   }
  // };

  return (
    <>
      <p style={{ textAlign: "left", padding: "0 100px" }}>
        Have an account? <a href='/Signin'>Sign In</a>
      </p>
      <div className='App'>
        <div className='container'>
          <h1>Welcome to AOT</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            quasi!
          </p>
          <form action='' className='form' onSubmit={submitForm}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name=''
              id=''
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type='submit'>Create an account</button>
          </form>
          <p style={{ textAlign: "center" }}>or signup with</p>
          <div className='btns'>
            <button className='icon'>
              <i className='fab fa-google'></i>
            </button>
            <button className='icon'>
              <i className='fa-brands fa-facebook'></i>
            </button>
            <button className='icon'>
              <i className='fa-brands fa-apple'></i>
            </button>
          </div>
        </div>
        <div className='container1'>
          <h1>
            Make a <br />
            Dream
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Eius temporibus autem cumque cupiditate nihil accusamus!
          </p>
          <div className='img-con'>
            <img src={person} alt='' className='person' />
            <p>
              Waleed Lozano <br />
              Product Designer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
