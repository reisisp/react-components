import React, { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

export const List = () => {
    const [td, setTd] = useState([])
    const [page, setPage] = useState(1);
    const limit = 20;
    const parentRef = useRef();
    const childRef = useRef();
    const intersecting = useScroll(parentRef, childRef, () => fetchTodos(page, limit))

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTd(prev => [...prev, ...json])
                setPage(prev => prev + 1)
            })
    }




    return (
        <div ref={parentRef} style={{ height: '80vh', overflow: 'auto' }}>
            {td.map(todo =>
                <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>{todo.id} {todo.title}</div>
            )}
            <div ref={childRef} style={{ height: 20, background: 'green' }}></div>
        </div>
    )
}