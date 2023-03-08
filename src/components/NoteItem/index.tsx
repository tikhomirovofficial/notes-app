import React, {FC, useState} from 'react';
import styles from "./noteitem.module.scss";
import {CloseIcon, EditIcon} from "../../icons";
import {useAppDispatch} from "../../app/hooks";
import {deleteNote, editNote, EditPayload} from "../../features/notes/notesSlice";

interface NoteItemProps {
    title: string,
    id: string
    color: string
    dateCreated: string
    dateUpdated: string


}

const NoteItem: FC<NoteItemProps> = ({id,title, color, dateCreated, dateUpdated}) => {
    const dispatch = useAppDispatch()
    const handleChangeTitle = (e: HTMLInputElement) => {
        const payload: EditPayload = {
            note_id: id,
            field: "title",
            value: e.value
        }
        dispatch(editNote(payload))
    }

    const handleDeleteNote = () => {
        dispatch(deleteNote(id))
    }

    return (
        <div style={{backgroundColor: color, border: color === '#fff' ? "2px solid black" : undefined}} className={styles.noteItem}>
            <div className={styles.noteHeader}>
                <div className={styles.noteHeaderLeft}>
                    <input type="text" className={styles.noteTitle} value={title} onChange={(event) => handleChangeTitle(event.target)}/>
                    <p className={styles.noteDate}>{dateCreated}</p>
                </div>
                <div onClick={handleDeleteNote} className={styles.noteCloseBtn}>
                    <CloseIcon/>
                </div>
            </div>
            <div className={styles.noteBottom}>
                <p className={styles.noteUpdatedDate}>upd {dateUpdated}</p>
                <div className={styles.noteEdit}>
                    <EditIcon width={32} height={32}/>
                </div>
            </div>

        </div>
    );
};

export default NoteItem;