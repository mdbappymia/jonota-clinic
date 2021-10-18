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

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  console.log(email, password);
  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const signUpUsingEmailAndPassword = (e) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsingEmailAndPassword = (e) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
      console.log("Log Out");
    });
  };

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
