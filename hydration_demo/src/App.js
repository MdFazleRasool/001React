import React, { useEffect, useState } from 'react' ;

function App({initialTasks}) {

  // const [tasks , setTasks ] = useState(initialTasks || window.__initialtasks__ || []);
  const [tasks, setTasks] = useState(() => {
    if (initialTasks) return initialTasks;
    if (typeof window !== "undefined") {
      return window.__initialtasks__ || [];
    }
    return [];
  });
  const [task , setTask ] = useState("");

  function addTodo(e){
    if(task){
      setTasks([...tasks , {id:tasks.length+1 , title: task}]) ;
      setTask("") ;
    }
  }

  // async function downloadTodos(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const data = await response.json();
  //   setTasks(data);
  // }

  useEffect(() =>{
    //setTasks(initialTasks) ;
    console.log("initial task",initialTasks);
    
  },[initialTasks])

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
        {tasks && tasks.map((task) =>(
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
