import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBA26xRW8WQ1TshLrZ0EX6_opQUJpw7lr4",
  authDomain: "auth-development-ebc9b.firebaseapp.com",
  projectId: "auth-development-ebc9b",
  storageBucket: "auth-development-ebc9b.appspot.com",
  messagingSenderId: "933115669561",
  appId: "1:933115669561:web:4e66bb1d029785b4ba31e8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
