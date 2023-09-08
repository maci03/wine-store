import firebase from 'firebase/compat/app'; // Import Firebase from 'firebase/compat/app'
import 'firebase/compat/auth'; // Import the auth module

const firebaseConfig = {
    apiKey: "AIzaSyB7yuzXfhe9cAGYoGbXcArNdrwqw9wWOTE",
    authDomain: "wine-store-b8dd6.firebaseapp.com",
    projectId: "wine-store-b8dd6",
    storageBucket: "wine-store-b8dd6.appspot.com",
    messagingSenderId: "197407073264",
    appId: "1:197407073264:web:20b5206f0d069d7fccf335",
    measurementId: "G-2NHCRHJGWN"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
