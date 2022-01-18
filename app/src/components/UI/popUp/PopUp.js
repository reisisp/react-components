import React from "react";
import cl from './PopUp.module.css';

export const PopUp = ({ children, visible, setVisible }) => {

    const vision = [cl.popUp];
    if (visible) {
        vision.push(cl.active);
    }
    return (
        <div className={vision.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.popUp__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}