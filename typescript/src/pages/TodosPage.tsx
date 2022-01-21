import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "../components/List";
import { TodoItem } from "../components/TodoItem";

export const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos();
    }, [])


    async function fetchTodos() {
        try {
            const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(res.data)
        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    )
}