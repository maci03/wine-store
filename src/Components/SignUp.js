import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";

function SignUp(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSignUp = async () => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            history.push("/")
        }catch(error){
            console.error(error.massage);
        }
}

return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;