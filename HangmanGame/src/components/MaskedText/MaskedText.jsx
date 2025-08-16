
import { getMaskedString } from "./maskingUtility";

function MaskedText({text,guessedLetters}){
    const maskedString = getMaskedString(text,guessedLetters);

    return (
        <>
            {maskedString.map((letters,idx) => {
                return(
                    <span key={idx} className="mx-1 my-1" >
                        {letters}
                    </span>
                )
            })}
        </>
    )
}
export default MaskedText;