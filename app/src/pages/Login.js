import React, { useContext } from "react";
import { CustomBtn } from "../components/UI/btn/CustomBtn";
import { CustomInput } from "../components/UI/input/CustomInput";
import { AuthContext } from "../context";

export const Login = () => {
    const { setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Аторизация</h1>
            <form onSubmit={login}>
                <CustomInput type="text" placeholder="логин" />
                <CustomInput type="password" placeholder="пароль" />
                <CustomBtn>Войти</CustomBtn>
            </form>
        </div>
    )
}