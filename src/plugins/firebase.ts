import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { VUE_APP_AUTH_API_KEY } from "../const";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VUE_APP_AUTH_API_KEY,
  authDomain: "seller-c8bcc.firebaseapp.com",
  databaseURL:
    "https://seller-c8bcc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "seller-c8bcc",
  storageBucket: "seller-c8bcc.appspot.com",
  messagingSenderId: "43844844028",
  appId: "1:43844844028:web:9e21651c8dc5ba0ca5da79",
  measurementId: "G-H4BZGNHNJ7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const ordersCollection = db.collection("orders");
