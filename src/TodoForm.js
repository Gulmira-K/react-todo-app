import { useState } from "react";

export default function TodoForm(props) {
    const [input, setInput] = useState("")

    function handleChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input  
        })
        setInput("")
    }
    
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a ToDo"
                value={input} name="text"
                className="todo-input"
                onChange={handleChange}
                autoFocus="on"/>
            <button className="todo-button">Add ToDo</button>
       </form>
    )
}