import { firebase } from '../Config/Firebase';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
const sinup = ((email, password, props) => {
  if (email == "" && password == "") {
    alert("Username and Email Field cannot be empty!")
  } else if (email == "") {
    alert("Fill in email!")
  } else if (password == "") {
    alert("Fill in password!")
  } else {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        props.push('/Dashboard')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
        alert("error")
      });
  }
})
const login = ((email, password) => {
  if (email == "" && password == "") {
    alert("Username and Email Field cannot be empty!")
  } else if (email == "") {
    alert ("Fill in email!")
  } else if (password == "") {
    alert ("Fill in password!")
  } else {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Welcome")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert("error")
    });
  }
})
const logout = (() => {
  firebase.auth().signOut()
    .then()
})
export { sinup, login }