import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ZXrFBXbfeXyIYcKSoWPysAU1hZMOc8o",
  authDomain: "proyecto-react-9c8b1.firebaseapp.com",
  projectId: "proyecto-react-9c8b1",
  storageBucket: "proyecto-react-9c8b1.appspot.com",
  messagingSenderId: "1070236584412",
  appId: "1:1070236584412:web:6fe924ef5aaae70dcfa719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)