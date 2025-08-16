import './Button.css'
import style from "./getButtonFile"

function Button({text,onClickHandler,styleType="primary",type="button"}){

    console.log(text);//Object
    
    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={`px-4 py-2 ${style(styleType)} bg-blue-400`}
        >
            {text}
        </button>
    );
}


export default Button;