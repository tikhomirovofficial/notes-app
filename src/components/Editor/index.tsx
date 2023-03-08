import React, {useEffect, useState} from 'react';
import ReactQuill from "react-quill";
import styles from './editor.module.scss'
import {BrashIcon, CloseIcon} from "../../icons";
import {editNote, EditPayload, NotesState, setNoteEdit, setIsEditing} from "../../features/notes/notesSlice";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

const Editor = () => {

    const dispatch = useAppDispatch()
    const {noteEditIndex, notes} = useAppSelector<NotesState>(state => state.notes)


    const handleChangeTitle = (e: HTMLInputElement) => {
        const payload: EditPayload = {
            note_id: noteEditIndex != null ? notes[noteEditIndex].id : "",
            field: "title",
            value: e.value
        }
        dispatch(editNote(payload))
    }
    const handleChangeDescription = (val: string) => {
        const payload: EditPayload = {
            note_id: noteEditIndex != null ? notes[noteEditIndex].id : "",
            field: "description",
            value: val
        }
        dispatch(editNote(payload))
    }

    const handleCloseEditor = () => {
        dispatch(setIsEditing(false))
    }

    return (
        <div onClick={handleCloseEditor} className={styles.editorWrapper}>
            <div onClick={event => event.stopPropagation()} className={styles.editorBlock}>
                <div className={styles.editorHeader}>
                    <div style={{backgroundColor: noteEditIndex != null ? notes[noteEditIndex].color : ""}} className={styles.colorPicker}></div>
                    <div onClick={handleCloseEditor} className={styles.editorClose}>
                        <CloseIcon/>
                    </div>
                </div>

                <input value={noteEditIndex != null ? notes[noteEditIndex].title : ""} type="text"
                       onChange={e => handleChangeTitle(e.target)} maxLength={40} aria-valuemax={10}
                       className={styles.editTitle}/>

                <ReactQuill placeholder={"Опишите заметку..."} style={{
                    background: "inherit",
                    flex: 0.8,
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "100%"
                }} theme="snow" value={noteEditIndex != null ? notes[noteEditIndex].description : ""}
                            onChange={handleChangeDescription}/>

                <div className={styles.editorBottom}>
                    <p className={styles.updatedText}>last updated {noteEditIndex != null ? notes[noteEditIndex].dateUpdated : ""}</p>
                    <div className={styles.editorColorPickerBlock}>

                    </div>
                </div>
            </div>
        </div>
    )

};

export default Editor;