import { configureStore } from "@reduxjs/toolkit"
import drugsSliceReducer from "./Drugs/drugsSlice"

export const store = configureStore({
    reducer: {
        users: drugsSliceReducer,
    }
})