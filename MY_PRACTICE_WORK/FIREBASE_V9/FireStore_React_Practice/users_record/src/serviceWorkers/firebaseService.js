import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";

const usersColRef = collection(db, "users");

class UsersDataService{

    getAllUsers = () => {
        let users = []
        onSnapshot(usersColRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                return users.push(doc.data())
            })
        })
        return users;
    }
}

export default new UsersDataService();