import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/List";
import { UserItem } from "../components/UserItem";
import { IUser } from "../types/types";


export const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }
        catch (e) {
            alert(e)
        }
    }


    return (
        <List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id} />} />
    )
}