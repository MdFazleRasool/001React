import Button from "../Button/Button";
import TextInput from "../Textinput/TextInput";





function TextInputForm({inputType,handleFormSubmit,handleTextInputChange,handleShowHideClick}){
   
    return (
        
            <form   onSubmit={handleFormSubmit}>
                <div>
                    <TextInput
                        type={inputType}
                        label="Enter a word or a phase"
                        placeholder="Enter a word or a phrase here"
                        onChangeHandler={handleTextInputChange}

                    />
                </div>
                <div>
                    <Button 
                        
                        styleType="warning"
                        text={inputType === "password" ? "Show" : "Hide" }
                        onClickHandler={handleShowHideClick}
                    />
                </div>
                <div>
                    <Button 
                        type="submit"
                        styleType="error"
                        text="Submit"
                        handleFormSubmit={handleFormSubmit}
                    />
                </div>
            </form>
        
    );
}

export default TextInputForm;