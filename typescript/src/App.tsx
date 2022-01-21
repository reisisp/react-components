import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodosPage } from './pages/TodosPage';
import { UserItemPage } from './pages/UserItemPage';
import { UsersPage } from './pages/UsersPage';

export const App = () => {


  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список дел</NavLink>
      </div>
      <div className="App">
        <Routes>
          <Route path={'/users'} element={<UsersPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


