import { useEffect, useState } from 'react';
import './App.css';
import NewTodo from "./components/newTodo"
import ShowTodos from './components/ShowTodos';
import logo from "./images/todo-logo.png"

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const oldTodos = JSON.parse(localStorage.getItem("todos"))
    if(oldTodos && oldTodos.length>0) setTodos(oldTodos)
   
  },[])

  useEffect(() => {
    console.log(todos)
  }, [todos]);


  const handleSubmitTodo = (newTodo) => {
   
      const copyWNewTodos = [...todos, newTodo]
      setTodos(copyWNewTodos)
      localStorage.setItem("todos", JSON.stringify(copyWNewTodos) )
   

  }
  const handleRemoveTodo = (removedTodo) =>{
      const updatedTodos =todos.filter(todo => todo !== removedTodo)
      console.log("UpdatedTodos",updatedTodos)
      setTodos(updatedTodos)
      localStorage.setItem("todos", JSON.stringify(updatedTodos) )
   
 
  
  }

  return (

    <div className="App">
      <img src={logo} alt="asd"/>
      <NewTodo
        handleSubmitTodo={handleSubmitTodo}
      />
      {todos && todos.length > 0 &&
        <ShowTodos
          todos={todos}
          handleRemoveTodo={handleRemoveTodo}
        />
        

      }
    </div>
  );
}

export default App;
