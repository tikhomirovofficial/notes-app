import React, {FC} from 'react';
import styles from "./coloritem.module.scss";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectColor} from "../../features/colors/colorsSlice";

interface ColorItemProps {
    index: number
    background: string | null
    isSelected: boolean
    unfilled?: boolean
}

const ColorItem: FC<ColorItemProps> = ({background, isSelected, index, unfilled}) => {
    const dispatch = useAppDispatch()
    return (
        <div  onClick={() => dispatch(selectColor(index))} style={{backgroundColor: background || "white", border: unfilled ? "1px solid black" : undefined}}
             className={`${styles.item} ${isSelected ? styles.itemSelected : null}`}></div>
    );
};

export default ColorItem;