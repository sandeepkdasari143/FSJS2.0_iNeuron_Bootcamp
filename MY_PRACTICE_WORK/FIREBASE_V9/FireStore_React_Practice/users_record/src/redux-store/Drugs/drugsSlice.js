import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../config/firebase";

const usersColRef = collection(db, "users");


export const getAllUsers = createAsyncThunk(
    "drugs/getAllUsers",
    async () => {
        let users = [];
        getDocs(usersColRef).then((snapshot) => {
            snapshot.docs.map((doc) => users.push({...doc.data(), id: doc.id}))
        }).catch(err => console.log(err.message))
        console.log(users);
        return users;
    }
);

export const initialState = {
    user:[],
    
}

export const drugsSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.fulfilled]: (state, { payload }) => {
            console.log(payload);
            return {...state, user: payload}
        }
    }
});

//TODO => Export all the ACTIONS...
export const { } = drugsSlice.actions;
export const getUsers = (state => state.users.users);

//TODO: Export the Reducer to specify it in out GLOBAL STORE...
export default drugsSlice.reducer;