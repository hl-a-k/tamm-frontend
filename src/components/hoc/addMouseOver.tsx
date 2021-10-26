import React, {useState} from "react";

/**
 * This is a HOC which add:
 *      a text to indict whether mouse in or out
 *      and the color of text will toggle when click
 * @param TheComponent
 */
const addMouseOver = (TheComponent: any) => {
    return () => {
        const colors = ['gray', 'red'];
        const [textHover, setHover] = useState(false);
        const [colorIdx, setColorIdx] = useState(0);
        return (
            <div style={{ color: colors[colorIdx]}}
                 onMouseOver={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
                 onClick={() => {setColorIdx((colorIdx+1)%2)}}>
                <span>Mouse {textHover ? 'Over' : 'Out'}</span>
                <TheComponent />
            </div>)
    }
}

export default addMouseOver
