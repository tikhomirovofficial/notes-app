import { configureStore } from '@reduxjs/toolkit'
import {searchReducer} from "../features/search/searchSlice";
import {colorsReducer} from "../features/colors/colorsSlice";
import {notesReducer} from "../features/notes/notesSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        colors: colorsReducer,
        notes: notesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch