import {createSlice} from "@reduxjs/toolkit";

export interface SearchState {
    isFocus: boolean
}

const initialState: SearchState = {
    isFocus: false
}

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        handleFocus: (state) => {
            state.isFocus = !state.isFocus
        }
    }
})

export const {handleFocus} = SearchSlice.actions


export const searchReducer = SearchSlice.reducer