// firebase.js
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT-VEEVkuzz3lnDy1Syfg91YJ-MvC5RSU",
  authDomain: "cohesive-mile-417214.firebaseapp.com",
  // projectId: "remote-assistance-6ac31",
  // storageBucket: "remote-assistance-6ac31.appspot.com",
  // messagingSenderId: "837227051446",
  // appId: "1:837227051446:web:24f9f033d193c94c356917",
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app, "auth");

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return currentUser;
};
