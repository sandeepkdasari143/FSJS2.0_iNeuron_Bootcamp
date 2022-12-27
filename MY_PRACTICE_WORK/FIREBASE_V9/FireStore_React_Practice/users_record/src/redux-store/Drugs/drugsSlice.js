import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import UsersDataService from "../../serviceWorkers/firebaseService";

export const getAllUsers = createAsyncThunk("drugs/getAllUsers", async () => {
    const data = await UsersDataService.getAllUsers();
    console.log(data);
    return data;
})

export const initialState = {
    users:[],
    drugToUpdate: null,
    drugToUpdateKey: null,
    isLoading: false
}

export const drugsSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.fulfilled]: (state, { payload }) => {
            return { ...state, users: payload }
        }
    }
});

//TODO => Export all the ACTIONS...
export const { } = drugsSlice.actions;
export const getUsers = (state => state.users.users);

//TODO: Export the Reducer to specify it in out GLOBAL STORE...
export default drugsSlice.reducer;