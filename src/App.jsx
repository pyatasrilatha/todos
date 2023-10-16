import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

import CreateTodo from "./components/create-todo-component";
import EditTodo from "./components/edit-todo-component";
import TodosList from "./components/todos-list-component";

import logo from "./logo.svg";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href = "https://codingthesmartway.com" target = "_blank">
            <img src = {logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          </a>
          <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
          <div className="nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" exact element={<TodosList />} > </Route>
          <Route path="/edit/:id" element={<EditTodo />} > </Route>
          <Route path="/create" element={<CreateTodo />} > </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
