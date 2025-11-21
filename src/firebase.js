//for authentication of signup / login

import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword , 
  signInWithEmailAndPassword , getAuth , signOut} from "firebase/auth";
import {addDoc , collection ,getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk3uPAEOguIvYe3M44mTYlVFfKJvtL4u8",
  authDomain: "netflix-clone-77b47.firebaseapp.com",
  projectId: "netflix-clone-77b47",
  storageBucket: "netflix-clone-77b47.firebasestorage.app",
  messagingSenderId: "1012646269978",
  appId: "1:1012646269978:web:5b7b7bf205d58bdcb7ada3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//signup function
const signup = async (name, email, password) => {
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  }
  catch(error){
    console.error("Error signing up:", error);
    alert(error.message);
  }
}

//login function
const login = async (email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password);
  }
  catch(error){
    console.error("Error logging in:", error);
    alert(error.message);
  }
}

//logout function

const logout = () => {
  // auth.signOut();
  signOut(auth);
}

export {auth, db , signup , login , logout};

// now the entered data in sign up should be stored in firebase firestore database (firebase.google.com)