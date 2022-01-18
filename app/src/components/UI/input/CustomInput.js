import React from "react";
import cl from './CustomInput.module.css';

export const CustomInput = (props) => {
    return (
        <input className={cl.customInput} {...props} />
    )
}