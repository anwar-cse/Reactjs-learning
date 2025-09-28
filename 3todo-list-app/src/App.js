import React,{useState} from 'react';
import './App.css';
function App(){
  const[task,setTask]=useState("");
  const[todos,setTodos]=useState([]);

  const handleChange=(e)=>{
    setTask(e.target.value);
  };
  const addTask=()=>{
    if(task.trim()!==""){
      setTodos([...todos,task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
