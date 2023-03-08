import {createSlice} from "@reduxjs/toolkit";

export interface Color {
    hex: string
    unfilled?: boolean
}
export interface ColorsState {
    colors: Color[]
    selectedColor: number
}

const initialState: ColorsState = {
    colors: [
        {
          unfilled: true,
          hex: "#fff"
        },
        {
            hex: "#FE5151"
        },
        {
            hex: "#FFAA5C"
        },
        {
            hex: "#88F356"
        },
        {
            hex: "#56C4F3"
        },
        {
            hex: "#5666F3"
        }
    ],
    selectedColor: 0
}

export const ColorsSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        selectColor: (state, action) => {
            state.selectedColor = action.payload
        }
    }
})

export const {selectColor} = ColorsSlice.actions


export const colorsReducer = ColorsSlice.reducer