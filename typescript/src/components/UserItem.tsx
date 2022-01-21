import React, { FC } from "react"
import { IUser } from "../types/types"

interface UserItenProps {
    user: IUser
    onClick: (user: IUser) => void
}

export const UserItem: FC<UserItenProps> = ({ user, onClick }) => {
    return (
        <div onClick={() => onClick(user)} style={{ padding: 15, border: '1px solid gray' }}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улицу {user.address.street}.
        </div>
    )
}