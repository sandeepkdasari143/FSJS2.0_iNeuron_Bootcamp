// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB_lh6HAn67tpScXZhkv5UqPrkhVsetvQg",
    authDomain: "fir-practice-01-bfcc5.firebaseapp.com",
    projectId: "fir-practice-01-bfcc5",
    storageBucket: "fir-practice-01-bfcc5.appspot.com",
    messagingSenderId: "117922194593",
    appId: "1:117922194593:web:83dbd7b640b44711537ce0",
    measurementId: "G-EE2MK4JFVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
