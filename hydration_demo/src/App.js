import React, { useState } from 'react' ;

function App() {

  const [tasks , setTasks ] = useState([]);
  const [task , setTask ] = useState("");

  function addTodo(e){
    if(task){
      setTasks([...tasks , task]) ;
      setTask("") ;
    }
  }

  

  return (
    <div>
      <h1>To Do App</h1>

      <input 
        type='text'
        placeholder='Add a task'
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={addTodo}>Add Task In List</button>

      <ul>
        {tasks.map((task,index) =>(
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
