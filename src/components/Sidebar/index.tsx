import React, {useEffect} from 'react';
import styles from "./sidebar.module.scss"
import {useAppSelector} from "../../app/hooks";
import {ColorsState} from "../../features/colors/colorsSlice";
import List from "../List";
import ColorItem from "../ColorItem";

const Sidebar = () => {
    const {colors, selectedColor} = useAppSelector<ColorsState>(state => state.colors)

    return (
        <div className={`${styles.sidebar}`}>
            <h1 className={styles.logo}>Notik</h1>
            <List listBlockClassname={styles.colors} list={colors} renderItem={(item, index) => <ColorItem unfilled={item.unfilled} index={index} isSelected={index === selectedColor}
                                                                        background={item.hex}/>}/>
            <div className={styles.date}>
                8 Mar 2023
            </div>
        </div>
    );
};

export default Sidebar;