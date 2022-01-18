import { About } from "../pages/About";
import { Err } from "../pages/Err";
import { Login } from "../pages/Login";
import { PostIdPage } from "../pages/PostIdPage";
import { Posts } from "../pages/Posts";

export const privateRoutes = [
    { path: '/about', component: <About />, exact: true },
    { path: '/posts', component: <Posts />, exact: true },
    { path: '/posts/:id', component: <PostIdPage />, exact: true },
    { path: '/err', component: <Err /> },
]

export const publicRoutes = [
    { path: '/login', component: <Login />, exact: true },
    { path: '/err', component: <Err /> },
]