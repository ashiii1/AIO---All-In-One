/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpsA7X7zNHHoEqU77IkTT5fJr3EPvlXE0",
  authDomain: "makeyouup-9b3a9.firebaseapp.com",
  projectId: "makeyouup-9b3a9",
  storageBucket: "makeyouup-9b3a9.appspot.com",
  messagingSenderId: "433756190309",
  appId: "1:433756190309:web:201d7f93b5a5b838c6f88c",
  measurementId: "G-ZLLZKEXJWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;