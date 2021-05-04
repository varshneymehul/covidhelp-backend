import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_B5r_29lx0IE8uHbookbQBr-mSdzdgII",
  authDomain: "covidhelp-india.firebaseapp.com",
  projectId: "covidhelp-india",
  storageBucket: "covidhelp-india.appspot.com",
  messagingSenderId: "419516544691",
  appId: "1:419516544691:web:23c5365e7ac35aa908a2c6",
  measurementId: "G-W324J6ESBB",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

//Implementing Google sign-in with Firebase is simple. Let’s go to our firebase.js file and create a variable called provider, whose value will be an instance of the Google provider object.
const provider = new firebase.auth.GoogleAuthProvider();
//Firebase Auth provides different methods of signing in, such as signInWithRedirect, which redirects the user to a new page, and signInWithPopup, which makes use of a pop-up. After choosing our sign-in method, we can now write and export our simple Google sign-in function:
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => {
  auth.signInWithPopup(facebookProvider);
};
