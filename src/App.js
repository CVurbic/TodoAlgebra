import { useEffect, useState } from 'react';
import './App.css';
import NewTodo from "./components/newTodo"
import ShowTodos from './components/ShowTodos';
import bg from "./images/bgr.jpg"

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const oldTodos = JSON.parse(localStorage.getItem("todos"))
    if (oldTodos && oldTodos.length > 0) setTodos(oldTodos)

  }, [])



  const handleSubmitTodo = (newTodo) => {

    const copyWNewTodos = [...todos, { todo: newTodo, selected: false }]
    setTodos(copyWNewTodos)
    updateLocalStorage(copyWNewTodos)


  }
  const handleRemoveTodo = (removedTodo) => {
    const updatedTodos = todos.filter(todo => todo !== removedTodo)
    console.log("UpdatedTodos", updatedTodos)
    setTodos(updatedTodos)
    updateLocalStorage(updatedTodos)



  }

  const handleSetDone = (indexOfDone) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === indexOfDone) {
          return { ...todo, selected: !todo.selected };
      }
      return todo;
  });


  setTodos(updatedTodos);
  updateLocalStorage(updatedTodos)
  }


  const updateLocalStorage = (newTodos)=>{
    
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }
  return (

    <div className="App">
    <div className="background-container">
      <img src={bg} alt="Background" className="background-image" />
    </div>
    <NewTodo
      handleSubmitTodo={handleSubmitTodo}
    />
    {todos && todos.length > 0 &&
      <ShowTodos
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        handleSetDone={handleSetDone}
      />
    }
  </div>
  
  );
}

export default App;
