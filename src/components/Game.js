import { useState } from "react";
import Board from "./Board";
import CalculateWinner from "./CalculateWinner";

const Game = () =>{
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext,setXisNext] = useState(true);
    const winner = CalculateWinner(board)

    const handleClick = (evt) => {
        const boardCopy = [...board];
        if(winner || boardCopy[evt]) return;
        boardCopy[evt] = xIsNext ? 'X' :'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <button onClick={()=> setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return(
        <>
            <Board squares={board} onClick={handleClick}/>
            <div>
                <p>{winner? 'Winner: ' + winner : 'Next Player: ' + (xIsNext? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
 )
}

export default Game;