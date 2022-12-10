// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_lh6HAn67tpScXZhkv5UqPrkhVsetvQg",
    authDomain: "fir-practice-01-bfcc5.firebaseapp.com",
    projectId: "fir-practice-01-bfcc5",
    storageBucket: "fir-practice-01-bfcc5.appspot.com",
    messagingSenderId: "117922194593",
    appId: "1:117922194593:web:f96fe2dd47fd6f6c537ce0",
    measurementId: "G-F5BJDMSDX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);