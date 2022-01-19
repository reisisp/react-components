import React, { useState } from "react";
import useRequest from "./hooks/useRequest";
import axios from 'axios'




function App() {
  const [todos, loading, err] = useRequest(fetchTodos)


  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (err) {
    return <h1>Err</h1>
  }

  return (
    <div>
      {todos && todos.map(todo =>
        <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>{todo.id} {todo.title}</div>
      )}
    </div>
  );
}

export default App;
