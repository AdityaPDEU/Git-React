import React, { useState, useEffect } from 'react';
// ES7+ React/Redux/React-Native snippets
// rafce + tab

// import React from 'react'
//todo = {
//}
const App = () => {

  let [todo , setTodo] = useState({
    text : "",
    completed:false
  });
  let [todos , setTodos] = useState([])

    useEffect(()=>{
    let data = localStorage.getItem("todos");
    data = JSON.parse(data);
    setTodos(data);
  }, [])

  useEffect(()=>{
    let str = JSON.stringify(todos);
    localStorage.setItem("todos",str);
  }, [todos])




  const handleChange = (e) => {
    setTodo({
      ...todo,
      text: e.target.value,
    })
    console.log(todo.text) }

  const submitHandler = (e) => {
    const newTodo = [...todos, todo]
    setTodos(newTodo)
    setTodo({
      ...todo,
      text: ""
    })
    // l
  }
  return (
    <>
      <input type="text" value={todo.text} onChange={handleChange} />
      <button onClick={submitHandler}>Add Todo</button>

      <div className='container'>
        {todos.map((todo) => {
          return <div key={Math.random()}>
            <h2>{todo.text}</h2>
            <h3>completed: {todo.completed ? "true" : "false"}</h3>
            </div>
        })}
      </div>
    </>

)
}

// export default App
// this is test



const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  button: {
    fontSize: "20px",
    margin: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  resetButton: {
    fontSize: "16px",
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default App;