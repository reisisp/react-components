import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemPageParams {
    id: string
}

export const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams();
    const history = useNavigate()

    useEffect(() => {
        fetchUser();
    }, [])

    async function fetchUser() {
        try {
            const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(res.data)
        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history('/users')}>back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}
            </div>
        </div>
    )
}