import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Config/Firebase/firebase.config";
import axios from "axios";

export const AuthProvider = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState("");

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUserEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUserEmail = {email : userEmail}
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios.post( `http://localhost:5000/jwt `, loggedUserEmail, {withCredentials : true})
        .then(res => {
          console.log(res.data)
        })
      }
      else{
        axios.post(`http://localhost:5000/logout`, loggedUserEmail, {withCredentials : true})
        .then(res => {
          console.log(res.data)
        })
      }
    });
    return () => {
      unSubsCribe();
    };
  }, [user]);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (createdUser, name, photoURL) => {
    return updateProfile(createdUser, {
      displayName: name,
      photoURL: photoURL
        ? photoURL
        : "https://example.com/jane-q-user/profile.jpg",
    });
  };

  const authValue = {
    signInGoogle,
    loading,
    setLoading,
    createUserEmailPass,
    updateUserProfile,
    signInEmailPass,
    user,
    logOut,
  };

  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
