import {createSlice} from "@reduxjs/toolkit";

export interface SearchState {
    isFocus: boolean
    filter: string
}

const initialState: SearchState = {
    isFocus: false,
    filter: ""
}

export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        handleFocus: (state) => {
            state.isFocus = !state.isFocus
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const {handleFocus, changeFilter} = SearchSlice.actions


export const searchReducer = SearchSlice.reducer