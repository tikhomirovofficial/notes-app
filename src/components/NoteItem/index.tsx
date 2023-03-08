import React, {FC} from 'react';
import styles from "./noteitem.module.scss";
import {CloseIcon, EditIcon} from "../../icons";

interface NoteItemProps {
    title: string,
    color: string
    dateCreated: string
    dateUpdated: string


}

const NoteItem: FC<NoteItemProps> = ({title, color, dateCreated, dateUpdated}) => {
    return (
        <div style={{backgroundColor: color}} className={styles.noteItem}>
            <div className={styles.noteHeader}>
                <div className={styles.noteHeaderLeft}>
                    <h1 className={styles.noteTitle}>{title}</h1>
                    <p className={styles.noteDate}>{dateCreated}</p>
                </div>
                <div className={styles.noteCloseBtn}>
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