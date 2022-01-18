import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { CustomBtn } from "../UI/btn/CustomBtn";

export const Navbar = () => {
    const { setIsAuth } = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <CustomBtn onClick={logout}>Выйти</CustomBtn>
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}