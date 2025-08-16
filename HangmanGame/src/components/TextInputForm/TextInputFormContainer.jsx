import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";


function TextInputFormContainer(){

    const [inputType,setInputType] = useState("password");
    const [value,setValue] = useState("");

    const navigate  =    useNavigate();


    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted Successfully",value);
        setTimeout(()=>{
            if(value){
                //if we have something in value then we want to go to the play Page
                navigate(`/play` , {state:{wordSelected:value}});
            }
        },200)
        
    }
    
    function handleTextInputChange(event){
        console.log("Text Input chnage");
        console.log(event.target.value);
        setValue(event.target.value);
        
    }

    function handleShowHideClick(){
        console.log("   Show/hide Button Clicked ");
        if(inputType === "password"){
            setInputType("text");  
        }
        else{
            setInputType("password");
        }
        console.log(inputType);
    }

    return ( 
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit = {handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick = {handleShowHideClick}
        />
    );
}

export default TextInputFormContainer;