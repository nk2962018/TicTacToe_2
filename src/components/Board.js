import Square from './Square';
import '../styles/Board.css';

const Board = ({squares,onClick}) =>{
    return(
        <div className="grid-container">
            {squares.map((square,i) => (
             <Square key={i} value={square} onClick={()=>onClick(i)}/>
            ))}
        </div>
    )
}

export default Board;