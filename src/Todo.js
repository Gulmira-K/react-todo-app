import { useState } from "react"
import TodoForm from "./TodoForm";
import { CgCloseO } from 'react-icons/cg';
import { BiEditAlt } from 'react-icons/bi';

export default function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    function submitUpdate(value) {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if (edit.id) {
        return (
            <TodoForm edit={edit} onSubmit={submitUpdate} />
        )
    }
    // Map through the Todos
    return todos.map((todo, index) => (
        <div className={todo.complete ? "todo-row complete" : "todo-row"} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <BiEditAlt onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit-icon"/>
                <CgCloseO onClick={() => removeTodo(todo.id)} className="delete-icon"/>
            </div>
        </div>
    ))
}