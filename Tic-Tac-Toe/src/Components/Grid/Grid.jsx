import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../Helpers/checkWinner";
function Grid({numberOfCards}){


    const [board,setBoard] = useState(Array(numberOfCards).fill(""));
    const[turn,setTurn] = useState(true);//true  => O , false => X

    const [winner,setWinner] = useState(null);

    function play(idx)
    {
        if(turn === true){
            board[idx] = "O";
        }
        else{
            board[idx] = "X";
        }
        const win = isWinner(board,turn ? "O" :"X");
        if(win) setWinner(win);
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }

    return(
        <div    className="grid-wrapper">  
            {
                winner && (
                    <>
                        <h1 className="turn-highlight"> Winner is {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            } 
            <h1 className="turn-highlight">Current turn  : {(turn) ? 'O' : 'X'}</h1>
            <div    className="grid">
                {board.map((el,idx1) => <Card gameEnd={winner ? true : false}  key={idx1}  onPlay={play} player={el} idx={idx1}  />)}
            </div>
        </div>
    );
}

export default Grid;