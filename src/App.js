import './App.css';
import Square from './components/Square';
import { useState, useEffect } from "react";
import { Patterns } from "./Patterns";



function App() {

  const [emptyBoard, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [emptyBoard]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Salam Aleykum.: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const clickSquare = (square) => {
    setBoard(
      emptyBoard.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = emptyBoard[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (emptyBoard[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    emptyBoard.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "Heckes qazanmadi", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };


  return (
    <div className="App">
      <div className="emptyBoard">
      <div className="row">
          <Square
            val={emptyBoard[0]}
            clickSquare={() => {
              clickSquare(0);
            }}
          />
          <Square
            val={emptyBoard[1]}
            clickSquare={() => {
              clickSquare(1);
            }}
          />
          <Square
            val={emptyBoard[2]}
            clickSquare={() => {
              clickSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={emptyBoard[3]}
            clickSquare={() => {
              clickSquare(3);
            }}
          />
          <Square
            val={emptyBoard[4]}
            clickSquare={() => {
              clickSquare(4);
            }}
          />
          <Square
            val={emptyBoard[5]}
            clickSquare={() => {
              clickSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={emptyBoard[6]}
            clickSquare={() => {
              clickSquare(6);
            }}
          />
          <Square
            val={emptyBoard[7]}
            clickSquare={() => {
              clickSquare(7);
            }}
          />
          <Square
            val={emptyBoard[8]}
            clickSquare={() => {
              clickSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
