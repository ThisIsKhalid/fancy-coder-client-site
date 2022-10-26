import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, updateUserProfile, signIn, };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
