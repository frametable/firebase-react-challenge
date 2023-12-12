import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYsdlP6Wpbm8VnPRdpMngjZc1sqF6G7t0",
  authDomain: "fir-react-challenge.firebaseapp.com",
  projectId: "fir-react-challenge",
  storageBucket: "fir-react-challenge.appspot.com",
  messagingSenderId: "337128775913",
  appId: "1:337128775913:web:30c06cc0ec52cdbcff1078",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
