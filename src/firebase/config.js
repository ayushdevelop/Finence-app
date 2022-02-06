import firebase from "firebase/app";

// services
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARhSJmz90Az5uQtyLG5BOK_PXZWvLB18M",
  authDomain: "finence-fece8.firebaseapp.com",
  projectId: "finence-fece8",
  storageBucket: "finence-fece8.appspot.com",
  messagingSenderId: "1092212749843",
  appId: "1:1092212749843:web:4997d3917c78fc3138b1e6",
};

firebase.initializeApp(firebaseConfig);

const fireStore = firebase.firestore();
const firebaseAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;

export { fireStore, firebaseAuth, timestamp };
