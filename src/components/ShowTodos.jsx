import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import '../styles/ShowTodos.css';


function ShowTodos({ todos, handleRemoveTodo }) {
  

    return (
        <div className="todo-list">
            {todos && todos.length > 0 &&
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <span className='todo-text'>{todo}</span>
                            <button onClick={()=>handleRemoveTodo(todo)}><MdDeleteForever /></button>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default ShowTodos;
