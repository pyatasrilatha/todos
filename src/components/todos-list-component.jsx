import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Todo from "./todo-component";
import { Button } from "bootstrap";

const TodosLists = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        updateTodos()
    },[]);

    function deleteTodo (id) {
        axios.delete(`http://localhost:4000/todos/delete/${id}`)
            .then((res) => updateTodos())
    }

    function updateTodos() {
        axios.get("http://localhost:4000/todos")
            .then(res => setTodos(res.data))
    }
    
    return (
        <div>
            <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos && todos.length > 0 && todos.map((currentTodo, i) => 
                                <>
                                    <Todo todo={currentTodo} key={i}/>
                                    <button onClick={()=> deleteTodo(currentTodo._id)}>Delete</button>
                                </>
                            )
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default TodosLists;