import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDULK7YwDTMXPFEwau7mCfhusC4jDUyb70",
  authDomain: "nodal-acceb.firebaseapp.com",
  projectId: "nodal-acceb",
  storageBucket: "nodal-acceb.appspot.com",
  messagingSenderId: "879978941839",
  appId: "1:879978941839:web:600e6d1a0b0b7056d80ffa",
  measurementId: "G-D2HCPEMY7L"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;