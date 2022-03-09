import React, { useEffect, useState } from "react";
import { db } from "../config/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const authSate = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(authSate);
    });
  }, []);

  const navigator = useNavigate();

  const logoutHandler = () => {
    // log out firebase aut
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("userUID");
        // localStorage.clear();
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    navigator("/signin");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const userUID = localStorage.getItem("userUID");
    const dbRef = collection(db, "users");
    const q = query(dbRef, where("userUID", "==", userUID));
    const data = await getDocs(q);
    // console.log(data);
    data.forEach((doc) => {
      setUserData(doc.data());
      console.log(userData);
    });
  }, []);

  return (
    <div className='App' style={{ display: "flex", flexDirection: "column" }}>
      <h1>Dashboard</h1>
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>ID: {userData.userUID}</p>
      </div>
      <button style={{ width: "fit-content" }} onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
