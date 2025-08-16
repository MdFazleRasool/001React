
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {

  const [todos , setTodos] = useState([{id:1, value :'design it by yourself'}])

  function onTodoFormSubmit(value){
    if(value){
      setTodos([...todos ,{ value}])
    }
  }

  function deleteTodoByid(value){
    const newtodos= todos.filter(todo => todo.value != value)
    setTodos(newtodos);
    //console.log(todos);
    
  }

  const memodeleteTodoByid = useCallback(deleteTodoByid,[todos]);

  useEffect(() => {
    console.log('Todos' , todos);
  },[todos]);
  
  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit}/>
      <TodoList listOfTodos={todos}onDeleteTodo={memodeleteTodoByid} />
    </>
  )
}

export default App
