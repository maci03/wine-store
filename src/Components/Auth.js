import "./Auth.css";
import React, { useState } from "react";
import firebase from "../Components/firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
    setUser(null);
  };

  return (
    <div className="auth-container">
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login or Sign Up</h2>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="yellow-button" onClick={handleSignIn}>Sign In</button>
          <button className="yellow-button" onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Auth;
