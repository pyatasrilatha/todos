import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditTodo = (props) => {
    const [todoDescription, setTodoDescription] = useState("");
    const [todoResponsible, setTodoResponsible] = useState("");
    const [todoPriority, setTodoPriority] = useState("");
    const [todoCompleted, setTodoCompleted] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/todos/${id}`).then((res) => {
            setTodoDescription(res.data.todo_description);
            setTodoResponsible(res.data.todo_responsible);
            setTodoPriority(res.data.todo_priority);
            setTodoCompleted(res.data.todo_completed);
        })
    },[])

    function onChangeTodoDescription(e) {
        setTodoDescription(e.target.value);
    }

    function onChangeTodoResponsible(e) {
        setTodoResponsible(e.target.value);
    }

    function onChangeTodoPriority(e) {
        setTodoPriority(e.target.value);
    }

    function onChangeTodoCompleted(e) {
        console.log(!todoCompleted);
        setTodoCompleted(!todoCompleted);
    }

    function onSubmit(e) {
        e.preventDefault();

        console.log("Form submitted: ");
        console.log(`Todo Description: ${todoDescription}`);
        console.log(`Todo Responsible: ${todoResponsible}`);
        console.log(`Todo Priority: ${todoPriority}`);
        console.log(`Todo Completed: ${todoCompleted}`);

        const newTodo = {
            todo_description: todoDescription,
            todo_responsible: todoResponsible,
            todo_priority: todoPriority,
            todo_completed: todoCompleted
        }

        axios.post(`http://localhost:4000/todos/update/${id}`, newTodo)
            .then(res => console.log(res.data));
        navigate("/");
    }
    return (<div>
        <p>Update Todo</p>
        <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control" value={todoDescription} onChange={onChangeTodoDescription}/>
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text" className="form-control" value={todoResponsible} onChange={onChangeTodoResponsible}/>
                </div>
                <div className="form-group">
                    <div className="form-checl form-check-inline">
                        <input className="form-check-input" type="radio" name= "priorityOptions" id="priorityLow" value="Low"
                            checked= {todoPriority==="Low"}
                            onChange={onChangeTodoPriority}/>
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-checl form-check-inline">
                        <input className="form-check-input" type="radio" name= "priorityOptions" id="priorityMedium" value="Medium"
                            checked= {todoPriority==="Medium"}
                            onChange={onChangeTodoPriority}/>
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-checl form-check-inline">
                        <input className="form-check-input" type="radio" name= "priorityOptions" id="priorityHigh" value="High"
                            checked= {todoPriority==="High"}
                            onChange={onChangeTodoPriority}/>
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input  className="form-check-input"
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            onChange={onChangeTodoCompleted}
                            checked={todoCompleted}
                            value={todoCompleted}
                            />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>                        
                </div>
                <br/>
                <div className="form-group">
                    <input type="submit" value="Update Todo" className="btn btn-primary"/>
                </div>
            </form>
    </div>);
}
export default EditTodo;