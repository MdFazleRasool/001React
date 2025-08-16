/*

* @param {the word which is given as input and is expected yo be guessed}   oroginal word
* @param {Letters which are guessed by the user already } guessedLetters

    Ex :- Oroginal Word : HUMBLE
    GuessedLetters: ['H','M','E']
        return ---> "H_M__E"




*/ 

export function getMaskedString(originalWord,guessedLetters){
    guessedLetters=guessedLetters.map( letter => letter.toUpperCase());

    const guessedLetterSet = new Set(guessedLetters);
    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char))
            return char;
        else
            return "_";
    }); //['H','_','M','','','E']

    return result;//['H','_','M','','','E']
    
    //return result.join(''); // "H_M__E"
}