import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebaseConfiq";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user,setUser]= useState(null)
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  }
  useEffect(()=>{
  const unSubscribe =   onAuthStateChanged(auth,currentUser=>{
      console.log('user in the auth state changed',currentUser);
      setUser(currentUser)
    });
    return ()=> {
      
      unSubscribe()
    }
  },[])

  const authInfo = {
    registerUser,
    loginUser,
    user,
    setUser,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
