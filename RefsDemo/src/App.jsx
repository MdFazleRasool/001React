
import { forwardRef, useEffect, useRef, useState } from 'react';
import './App.css'


const Input = forwardRef( function InputComponent ({type,placeholder},ref){
  return(
    <input 
      type={type} 
      placeholder={placeholder} 
      ref={ref} 

    />
  );
})

function App() {

  const customRef = useRef(0); 
  
  const [x,setX] = useState(0);

  let y=0;

  const inputRef = useRef(null);
  const customInputRef = useRef(null);

  function handleClick(){
    document.getElementById("email").focus();
    customRef.current=customRef.current+1;
    y+=1;
    console.log(customRef,y);
    inputRef.current.focus(); 
  }

  function handlMoreClick(){
    customInputRef.current.focus();
  }

  useEffect(()=>{
    console.log("useEffect",customRef,y);
    console.log(inputRef);
    
  },[x]);
   
  return (
    <>
      <input 
        type='email'
        id='email'
        ref={inputRef}
      /> 
      <br />
      <Input type='text ' placeholder='Innut text' ref={customInputRef}/>
      <br/>
      <input 
        type='password'
      />
      <br/>
      <button onClick={ handlMoreClick}>Custom Component</button>
      <button onClick={handleClick}>
        Click
      </button>
      <button onClick={() => setX(x+1)}>Submit</button> {x}
    </>
  )
}

export default App
