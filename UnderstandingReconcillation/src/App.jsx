
import React , { useState } from 'react'
import './App.css'


function Input({type , placeholder}) { 
  const [s , setS] = useState('');
  return (
    <div>
      <input  type = {type} placeholder= {placeholder} value={s}  onChange={(e) => setS(e.target.value)}/>
    </div>
  );
}

//acdlite/react-fiber-architecture
function App() {
const [isStudent , setIsStudent] =  useState(false);
const [count , setCount] = useState(0);
function updateCount(){
  setCount((prev) => prev+1);
  //console.log(count);
  setCount((prev) => prev+1);
  console.log(count);
  
}
  return (
    <>
      <form>
        <input 
            type='text' placeholder='Enter your Name' 
          /> <br />
          <input 
            type='checkbox'
            id='student'
            name = 'student'
            onChange = { () => setIsStudent(!isStudent)}
            value={isStudent}
          />
          
          <label htmlFor='student'>Are you a Student  </label>

          {/* {isStudent ? <Input type="text" placeholder=" Enter Your School Name " /> : null}
      
          {!isStudent ? <Input type="text" placeholder=" Enter Your Company Name " /> : null} */}
          
          {isStudent ? <Input type="text" placeholder=" Enter Your School Name " key={"school"} /> : <Input type="text" placeholder=" Enter Your Company Name " key={"Company"}/>} 

      </form>
      <div>
        Count value : {count} <br />
        <button onClick={updateCount}>Click</button>
      </div>
    </>
  )
}

export default App
