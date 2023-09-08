// src/components/SignIn.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
