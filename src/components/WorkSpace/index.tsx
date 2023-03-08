import React, {RefObject, useRef, useState} from 'react';
import styles from './workspace.module.scss'
import {CloseIcon, EditIcon, PlusIcon, SearchIcon} from "../../icons";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {SearchState, handleFocus} from "../../features/search/searchSlice";
import NoteItem from "../NoteItem";

const WorkSpace = () => {

    const dispatch = useAppDispatch()
    const {isFocus} = useAppSelector<SearchState>(state => state.search)

    const handleFocusSearch = () => {
        dispatch(handleFocus())
    }

    return (
        <div className={styles.workspace}>
            <div className={styles.search}>
                <label htmlFor="search">
                    <SearchIcon/>
                </label>

                <input id="search" onFocus={handleFocusSearch} onBlur={handleFocusSearch} placeholder={"Search..."}
                       className={styles.searchInput} type="text"/>
                <div style={isFocus ? {transform: "unset"} : undefined} className={styles.searchLine}></div>
            </div>
            <div className={styles.notesBlock}>
                <h1 className={styles.notesTitle}>Заметки</h1>
                <div className={styles.notesList}>
                    <NoteItem title={"New"} dateCreated={"Tue Mar 07 2023"}  color={"#FFAA5C"} dateUpdated={"07.03.2023"}/>
                </div>
            </div>
            <div className={styles.addNoteBtn}>
                <PlusIcon height={35} width={35}/>
                Заметка
            </div>
        </div>
    );
};

export default WorkSpace;