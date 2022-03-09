import React, { useState } from "react";
import { auth, db } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import person from "../img/person.jpeg";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // let userUID;
  let userData = {};
  const navigator = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, email, phone, password);
    createUserWithEmailAndPassword(auth, email, password)
      // response coming here means promiss resolving here
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        userData = {
          name: name,
          email: email,
          phone: phone,
          userUID: user.uid,
        };
        console.log(userData);
        addData();

        navigator("/signin");
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  const addData = async () => {
    const docRef = collection(db, "users");
    const addUser = await addDoc(docRef, userData);
    console.log("Document written with ID: ", addUser.id);
  };

  return (
    <div className='App'>
      <div className='container'>
        <p style={{ textAlign: "left" }}>
          Have an account? <Link to='/signin'>Sign in</Link>
        </p>
        <h1>Welcome to AOT</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quasi!
        </p>
        <form action='' className='form' onSubmit={submitForm}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='Name'
            id='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor='phone'>Phone</label>
          <input
            type='number'
            name='phone'
            id='phone'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
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
  );
};

export default SignUp;
