import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = props => {
    // function deleteTodo (id) {
    //     axios.delete(`http://localhost:4000/todos/delete/${props.todo._id}`)
    //         .then((res) => updateTodos())
    // }

    // function updateTodos() {
    //     axios.get("http://localhost:4000/todos")
    //         .then(res => setTodos(res.data))
    // }
    return (
        <tr>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
            <td>
                <Link to={"/edit/"+props.todo._id}>Edit</Link>
            </td>
            {/* <td>
                <Button onClick={() => deleteTodo()}>Delete</Button>
            </td> */}
        </tr>
    )
}
export default Todo;