import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "./app/hooks";
import Sidebar from "./components/Sidebar";
import WorkSpace from "./components/WorkSpace";
import Editor from "./components/Editor";
import 'react-quill/dist/quill.snow.css';
import {NotesState} from "./features/notes/notesSlice";
import Main from "./components/Main";

function App() {
    const {isEditing} = useAppSelector<NotesState>(state => state.notes)

    return (
        <div className="App">
            {
                isEditing ?
                <Editor/> : null
            }
            <Main/>
        </div>
    );
}

export default App;
