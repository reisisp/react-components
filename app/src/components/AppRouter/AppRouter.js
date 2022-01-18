import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context";
import { publicRoutes, privateRoutes } from "../../router";
import { Loader } from "../UI/Loader/Loader";

export const AppRouter = () => {
    const { isAuth, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader />
    }


    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component} exact={route.exact} />
                )}
                <Route path='*' element={<Navigate to='/posts' />} />
            </Routes >
            : <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.component} exact={route.exact} />
                )}
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes >

    )
}