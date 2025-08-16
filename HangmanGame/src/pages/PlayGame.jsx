/* eslint-disable no-unused-vars */
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame(){
    /* Type 1
     const params = useSearchParams();
    console.log(params);

    /*  type 2
    const [searchParams] = useSearchParams(); //destructuring data or Array
    console.log(searchParams.get("text"));
    */

    /*  Type3
    const {text,id} = useParams();
    console.log(text,id);
    */

    const {state}  =  useLocation();
    // const arr = ['hello' , 'world'];
    
    return(
        <>
            <h1>Play Game   {state.wordSelected}</h1>
            
            <MaskedText text={state.wordSelected}   guessedLetters={['H','E']}/>
            {/* {arr.map((Element,idx) => <h1 key={idx}  >{Element}</h1>)} */}
            <Link to='/start' className="text-blue-400" >start Game Link </Link>

        </>
    );
}
export default PlayGame;