import { useEffect, useState } from "react";

export default function useLocalStorage(key,initialValue){
  // may be the key is already present in the localStorage or we are creating a  new key for the 1st time

  const [storedValue , setStoredValue ] = useState( () => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue ;
    } catch (error) {
        console.log("Error reading local Storage key : " , key);
        console.log(error);
        
        return initialValue ;
    }
  }) ;

  useEffect (() => {
    try {
        // if the user chnages the value of key or the stored value
        window.localStorage.setItem(key, JSON.stringify(storedValue));
        
    } catch (error) {
        console.log("Error writing to  localStorage key : " , key);
        console.log(error);
        
    }
  },[key,storedValue])
  return [storedValue , setStoredValue];
}