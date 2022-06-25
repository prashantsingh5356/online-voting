import { useEffect } from "react";

import AuthContext from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const initialValue = {};

const AuthProvider = (props) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={initialValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
