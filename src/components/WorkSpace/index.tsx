import React, {RefObject, useEffect, useMemo, useRef, useState} from 'react';
import styles from './workspace.module.scss'
import {CloseIcon, EditIcon, PlusIcon, SearchIcon} from "../../icons";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {SearchState, handleFocus, changeFilter} from "../../features/search/searchSlice";
import {addNote, Note, NotesState} from "../../features/notes/notesSlice";
import {ColorsState} from "../../features/colors/colorsSlice";
import NoteItem from "../NoteItem";
import List from "../List";
import {addToStorage, getFromStorage} from "../../utils/LocalStorageExplorer";

const WorkSpace = () => {

    const dispatch = useAppDispatch()
    const {isFocus, filter} = useAppSelector<SearchState>(state => state.search)
    const {notes} = useAppSelector<NotesState>(state => state.notes)


    const {colors, selectedColor} = useAppSelector<ColorsState>(state => state.colors)


    const handleFocusSearch = () => {
        dispatch(handleFocus())
    }

    const handleFilter = (e: HTMLInputElement) => {
        dispatch(changeFilter(e.value))
    }
    const handleCreateNote = () => {
        dispatch(addNote({
            color: colors[selectedColor].hex
        }))
    }
    useEffect(() => {
        addToStorage('notes', notes)
    }, [notes])

    return (
        <div className={styles.workspace}>
            <div className={styles.search}>
                <label className={styles.searchLabel} htmlFor="search">
                    <SearchIcon/>
                </label>

                <input id="search" value={filter} onChange={e => handleFilter(e.target)} onFocus={handleFocusSearch}
                       onBlur={handleFocusSearch} placeholder={"Search..."}
                       className={styles.searchInput} type="text"/>
                <div style={isFocus ? {transform: "unset"} : undefined} className={styles.searchLine}></div>
            </div>
            <div className={styles.notesBlock}>
                <h1 className={styles.notesTitle}>Заметки</h1>
                {
                    !notes.length || !notes.filter(note => note.title.includes(filter)).length ?
                        <p className={styles.emptyNotesText}>Добавьте что-нибудь...</p> :
                        <List listBlockClassname={styles.notesList}
                              list={notes.filter(note => note.title.includes(filter))}
                              renderItem={item => <NoteItem id={item.id} key={item.id} title={item.title}
                                                            dateCreated={item.dateCreated}
                                                            color={item.color} dateUpdated={item.dateUpdated}/>}/>
                }


            </div>
            <div onClick={handleCreateNote} className={styles.addNoteBtn}>
                <PlusIcon height={35} width={35}/>
                Заметка
            </div>
        </div>
    );
}

export default WorkSpace;