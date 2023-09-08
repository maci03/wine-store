import React, { useState } from "react";
import firebase from "./firebase";

function Auth(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
}

const handleSingUp = async () => {
    try{
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        setUser(userCredential.user);
    }catch(error){
        console.error(error.massage);
    }
};
const handleSingOut = () =>{
    firebase.auth().signOut();
    setUser(null)
};

return(
    <div>
    {user ? (
      <div>
        <p>Welcome, {user.email}!</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    ) : (
        <div>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            
        </div>