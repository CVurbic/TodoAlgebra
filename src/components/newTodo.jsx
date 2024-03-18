// NewTodo.js
import React from "react";
import "../styles/NewTodo.css"; // Uvoz CSS datoteke za stilizaciju

class NewTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ""
        };
    }

    handleChange = (event) => {
        this.setState({ todoText: event.target.value });
    }

    handleSubmitTodo = () => {
        if (this.state.todoText.trim() !== "") {
            this.props.handleSubmitTodo(this.state.todoText);
            this.setState({ todoText: "" }); // Clear input field after submission
        } else {
            console.log("error: todo text cannot be empty");
        }
    }

    render() {
        return (
            <div className="new-todo">

                <input type="text" value={this.state.todoText} onChange={this.handleChange} placeholder="Upiši novi zadatak" />

                <button onClick={this.handleSubmitTodo}>Submit</button>
            </div>
        );
    }
}

export default NewTodo;
