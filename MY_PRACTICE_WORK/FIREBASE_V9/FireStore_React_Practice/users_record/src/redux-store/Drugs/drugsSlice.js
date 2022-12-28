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
        let data = []
        await onSnapshot(usersColRef, (snapshot) => {
            snapshot.docs.map((doc) => {
                return data.push({...doc.data(), id: doc.id})
            })
        });
        return data;
    }
);

const initialState = {
    users:[],
}

export const drugsSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            console.log("Pending");
            console.log(state.users);
        },

        [getAllUsers.fulfilled]: (state, { payload }) => {
            console.log("Successfully Fetched");
            console.log("Payload:", payload);
            let user = [];
            user = payload;
            console.log("User Array: ", user);
            
            return state.users.push(user.map((use) => {
                console.log({...use});
                return {...use}
            }))
        },

        [getAllUsers.rejected]: () => {
            console.log("Rejected");
        }
    }
});

//TODO => Export all the ACTIONS...
export const { } = drugsSlice.actions;
export const getUsers = (state => state.users);

//TODO: Export the Reducer to specify it in out GLOBAL STORE...
export default drugsSlice.reducer;