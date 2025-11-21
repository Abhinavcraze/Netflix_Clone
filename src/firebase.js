//for authentication of signup / login

import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword , 
  signInWithEmailAndPassword , getAuth , signOut} from "firebase/auth";
import {addDoc , collection ,getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

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
    toast.error("Signup failed: " + error.code.split('/')[1]); //toastify from roast toastify website
  }
}

//login function
const login = async (email, password) => {
  try{
    await signInWithEmailAndPassword(auth, email, password);
  }
  catch(error){
    console.error("Error logging in:", error);
    toast.error("Login failed: " + error.code.split('/')[1].split('-').join(" ")); //toastify from roast toastify website
  }
}

//logout function

const logout = () => {
  // auth.signOut();
  signOut(auth);
}

export {auth, db , signup , login , logout};

// now the entered data in sign up should be stored in firebase firestore database (firebase.google.com)