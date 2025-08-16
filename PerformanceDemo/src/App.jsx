
import { useState,memo, useCallback, useMemo } from 'react';
import './App.css'
// import SlowComponent from './slowComponent';
import Modal from './modal';
import AnotherSlowComponent from './AnotherSlowComponent';


// const MemorisedSlowComponent = memo(function ModifiedSlowComponent({time , custom ,x}){
//   return (<SlowComponent  time = {time} custom={custom} x={x} />)
// });

const MemoAnotherComponent = memo(AnotherSlowComponent);

function Child(){ 
  return <span>i am a child</span>;
}

function App() {
  const [isOpen , setIsOpen ] = useState(false);


  const [x,setX] = useState(0);

  // const someFunction = useCallback( () => {},[]); // [] dependency array 

  // const timeArry= useMemo(() => {
  //   return [1000];
  // },[]);



  const memoChild = useMemo(() => {
    return <Child/>
  },[]);

  return (
    <>
        <div>
          Something done here
        </div>
        
        <button onClick={() => setX(x+1)}>Increment</button>

        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        {isOpen && <Modal close={()=>setIsOpen(false)} />}
        <div>
          Something done here
        </div>
        {/* <MemorisedSlowComponent time={timeArry} custom = {someFunction} x={x}/> */}
        
        <MemoAnotherComponent>
          {memoChild}
        </MemoAnotherComponent>
    </>
  )
}

export default App;
