import React from "react";
import cl from './CustomBtn.module.css';

export const CustomBtn = ({ children, ...props }) => {

    return (
        <button {...props} className={cl.btn} >
            {children}
        </button>
    )
}