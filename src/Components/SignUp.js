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
        }
    }
}