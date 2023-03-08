import { configureStore } from '@reduxjs/toolkit'
import {searchReducer} from "../features/search/searchSlice";
import {colorsReducer} from "../features/colors/colorsSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        colors: colorsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch