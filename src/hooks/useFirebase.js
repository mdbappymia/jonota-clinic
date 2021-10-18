/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// authentication
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //   email and password handle function
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const auth = getAuth();

  //   google sign up and login
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //   email and password sign up
  const signUpUsingEmailAndPassword = (e) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   email and password sign in
  const signInUsingEmailAndPassword = (e) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout function
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  //   set user on change the state
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubcribed;
  }, []);

  /* return all the function that are implement the file and that can access other file */
  return {
    signInUsingGoogle,
    user,
    setUser,
    setError,
    logOut,
    error,
    handleEmail,
    handlePassword,
    signUpUsingEmailAndPassword,
    signInUsingEmailAndPassword,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
