import { useState } from "react";
import Heading from "./components/Heading";
// import Winner from './components/Winner';
// import Square from './components/Square';

function App() {
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gotWinner, setGotWinner] = useState("");

  const handleMove = (sqInd) => {
    if(!gotWinner){
      if (squares[sqInd] == null) {
        //make move
        const newSquares = squares.slice();
        newSquares[sqInd] = xIsPlaying ? "X" : "O";
        setSquares(newSquares);

        // check for winner
        const winner = calculateWinner(squares);
        if (winner) {
          setGotWinner(winner);
          console.log("Winner is ", winner);
          return;
        } else {
          //next player turn
          setXIsPlaying(!xIsPlaying);
        }
      } else {
        console.log("coming in else ");
      }
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setGotWinner(false);
    setXIsPlaying(true);
  }

  function Square(props) {
    return (
      <div key={props.id} className="square" onClick={props.onClick}>
        {props.value}
      </div>
    );
  }

  return (
    <div className="container">
      <Heading gameTitle={"X-Tic-Tac-Toe-O"} />
      <button onClick={resetBoard}>Reset</button>
      <div>
        {"Turn of " + (xIsPlaying ? "X" : "O")}
      </div>
      <div>
        {gotWinner && "Winner is " + gotWinner}
      </div>
      {Array(3)
        .fill(null)
        .map((_, row) => (
          <div key={row} className="square-row">
            {Array(3)
              .fill(null)
              .map((_, col) => (
                <Square
                  key={col}
                  value={squares[row * 3 + col]}
                  onClick={() => handleMove(row * 3 + col)}
                />
              ))}
          </div>
        ))}
    </div>
  );
}

export default App;
