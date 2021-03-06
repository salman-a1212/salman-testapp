import person from "../img/person.jpeg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useAuth } from "./Auth";
import { auth } from "../config/Firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // user state for Protected route

  const navigator = useNavigate();

  // firebase sign in auth
  const submitForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        localStorage.setItem("userUID", user.uid);
        navigator("/");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });

    setEmail("");
    setPassword("");
  };
  return (
    <div className='App'>
      <div className='container'>
        <p style={{ textAlign: "left" }}>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
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
            name='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type='submit'>Sign In</button>
        </form>
        <p style={{ textAlign: "center" }}>or signin with</p>
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
  );
};

export default SignIn;
