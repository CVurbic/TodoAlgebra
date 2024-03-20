import React from 'react';
import { MdDeleteForever, MdCompareArrows } from "react-icons/md";
import '../styles/ShowTodos.css';

function ShowTodos({ todos, handleRemoveTodo, handleSetDone }) {

    return (
        <div className="todo-list">
            <div className="zaObaviti">
                <ul>
                    {todos && todos.length > 0 && todos.map((todo, index) => (
                        !todo.selected && (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    checked={todo.selected}
                                    onChange={() => handleSetDone(index)}
                                />
                                <span className='todo-text'>{todo.todo}</span>
                            </li>
                        )
                    ))}
                </ul>
            </div>
            <div className="obavljen">
                <ul>
                    {todos && todos.length > 0 && todos.map((todo, index) => (
                        todo.selected && (
                            <li key={index}>
                                <input
                                    type="checkbox"
                                    checked={todo.selected}
                                    onChange={() => handleSetDone(index)}
                                />
                                <span className='todo-text'>{todo.todo}</span>
                            </li>
                        )
                    ))}
                </ul>
            </div>
            <MdCompareArrows className='finishUnfinishTodoButton'/>
            <MdDeleteForever className='removeTodoButton' onClick={() => handleRemoveTodo()} />
        </div>
    );
}

export default ShowTodos;
