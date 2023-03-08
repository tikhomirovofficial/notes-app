import {createSlice} from "@reduxjs/toolkit";
import {getDateString} from "../../utils/getDateString";
import {getFromStorage} from "../../utils/LocalStorageExplorer";

export interface Note {
    id: string
    title: string,
    description: string,
    dateCreated: string,
    dateUpdated: string
    color: string
}

type KeysNote = keyof Note

export interface EditPayload {
    field: KeysNote,
    value: string
    note_id: string
}

export interface NotesState {
    notes: Array<Note>
    noteEditIndex: number | null
    isEditing: boolean
}

const initialState: NotesState = {
    notes: getFromStorage('notes') || [
        {
            color: "#fff",
            dateCreated: "Wed Mar 08 2023", dateUpdated: "2023.03.07", description: "", id: "1", title: "new note"
        },

    ],
    noteEditIndex: null,
    isEditing: false
}

export const NotesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        setIsEditing: (state, action) => {
            state.isEditing = action.payload
        },
        setNoteEdit: (state, action) => {
            state.noteEditIndex = state.notes.findIndex(item => item.id === action.payload)
        },
        addNote: (state, action) => {
            const date = new Date()
            const newNote: Note = {
                color: action.payload.color,
                dateCreated: date.toDateString(),
                dateUpdated: getDateString(date),
                description: "",
                id: `${Date.now()}`,
                title: "new"

            }
            state.notes = [...state.notes, newNote]
        },
        editNote: (state, action) => {
            const editableField = action.payload.field as KeysNote

            const selectedNote = state.notes.findIndex(item => item.id == action.payload.note_id)

            const tempNotes = JSON.parse(JSON.stringify(state.notes))
            const changedNote = tempNotes[selectedNote] as Note
            const date = new Date()

            changedNote[editableField] = action.payload.value
            changedNote["dateUpdated"] = getDateString(date)
            tempNotes[selectedNote] = changedNote

            state.notes = tempNotes

        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter(note => note.id !== action.payload)
        }
    }
})

export const {addNote, editNote, deleteNote, setNoteEdit, setIsEditing} = NotesSlice.actions


export const notesReducer = NotesSlice.reducer