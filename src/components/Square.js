import '../styles/Square.css';

const Square = ({value,onClick}) =>{
    return(
        
            <button onClick={onClick} className="grid-styles">
                {value}
            </button>
        
    )
}

export default Square;