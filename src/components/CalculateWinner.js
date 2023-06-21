
const CalculateWinner = (squares) => {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i=0;i<lines.length;i++){
        const [winIndex1,winIndex2,winIndex3] = lines[i];
        if(squares[winIndex1] && squares[winIndex1] === squares[winIndex2] && squares[winIndex1] === squares[winIndex3]){
            return squares[winIndex1];
        }
    }
    return null;
}

// const squares = [
//     null,null,null,
//     'X','X','O',
//     null,null,null
// ];

export default CalculateWinner;