import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add Firebase Configuration for your webapp
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
