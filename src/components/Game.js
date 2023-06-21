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

    
    let status;
    if (winner) status = "Winner is : " + winner;
    else if (!board.includes(null)) status = 'Match Draw'
    else  status = "Next player: " + (xIsNext ? "X" : "O");


    return(
        <>
            <Board squares={board} onClick={handleClick}/>
            <div>
                {/* <p>{winner? 'Winner: ' + winner : 'Next Player: ' + (xIsNext? 'X' : 'O')}</p> */}
                <p></p>
                {status}
                <p></p>
            
                {renderMoves()}
            </div>
        </>
 )
}

export default Game;