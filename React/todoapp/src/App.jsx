import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getTodos, addTodo } from './api/api'
import { useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState({ text: '' })

  const [todoList, setTodoList] = useState([])
  console.log("Current todoList state:", todoList);

  useEffect(() => {
    getTodos()
      .then(response => {
        console.log("Fetched todos:", response);
        setTodoList(response);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, [])

  const handleInputChange = (e) => {

    setTodo({ text: e.target.value });
  };

  const handleAddTodo = () => {
    
    addTodo({todo})
      .then(response => {
        console.log("Todo added:", response);
        setTodoList([...todoList, response]);
      })
      .catch(error => {
        console.error("Error adding todo:", error);
      });
    setTodo({ text: '' }); // Clear the input field after adding
  };

  const handleGetTodos = () => {
    getTodos()
      .then(response => {
        console.log("Fetched todos:", response);
        setTodoList(response);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }

  return (
    <>
      <section id="center">
        <div className="hero">

        <div>
          <input type="text" placeholder='Enter todo item' value={todo.text} onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Add</button>
         </div>

         <button onClick={handleGetTodos}>Get Todos</button>

          <div className="list">
            <h1>Todo List</h1>
            {todoList.map((item) => (
              <div key={item.id} className="list-item">
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="spacer"></section>
    </>
  )
}

export default App
