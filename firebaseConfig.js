// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzg-E2iXaIDYBqmrNmWaXJIUU54xJKeWc",
  authDomain: "vitacure-beta.firebaseapp.com",
  projectId: "vitacure-beta",
  storageBucket: "vitacure-beta.appspot.com",
  messagingSenderId: "765644317149",
  appId: "1:765644317149:web:dfca15284677c32b811634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {auth};