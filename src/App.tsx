import { useState } from "react";
import "./App.css";
import Block from "./Block";

function App() {
  // how we can create a array with lenght and fill the value
  const [state, setState] = useState(Array(9).fill(null));

  const [currentTurn, setCurrentTurn] = useState("X");

  const [winner, setWinner] = useState<string>("");

  const [backgroundColor, setBackgroundColor] = useState(
    Array(9).fill("white")
  );
  const [isGameActive, setIsGameActive] = useState<boolean>(true);

  const handleCheckinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false;
  };

  const handleCheckDraw = (state: any[]) => {
    return !state.includes(null);
  };

  const handleOnclick = (index: number) => {
    // creating copy of oriniganl array
    const stateCopy = [...state];
    if (!isGameActive || state[index] !== null) return;
    stateCopy[index] = currentTurn;

    // chek winner
    const win = handleCheckinner(stateCopy);

    if (win) {
      setWinner(currentTurn);
      setIsGameActive(false);
    } else if (handleCheckDraw(stateCopy)) {
      setWinner("Draw");
    }

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
    const backgroundCopy = [...backgroundColor];
    backgroundCopy[index] = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )})`;
    setBackgroundColor(backgroundCopy);
  };

  const handleRestartGame = () => {
    setState(Array(9).fill(null));
    setCurrentTurn("X");
    setWinner("");
    setBackgroundColor(Array(9).fill("white"));
    setIsGameActive(true);
  };
  console.log();
  return (
    <>
      <h1>well come to tik tak to game</h1>
      <div className="boardContainer">
        <div className="row">
          <Block
            onClick={() => handleOnclick(0)}
            value={state[0]}
            style={{ backgroundColor: backgroundColor[0] }}
          />
          <Block
            onClick={() => handleOnclick(1)}
            value={state[1]}
            style={{ backgroundColor: backgroundColor[1] }}
          />
          <Block
            onClick={() => handleOnclick(2)}
            value={state[2]}
            style={{ backgroundColor: backgroundColor[2] }}
          />
        </div>
        <div className="row">
          <Block
            onClick={() => handleOnclick(3)}
            value={state[3]}
            style={{ backgroundColor: backgroundColor[3] }}
          />
          <Block
            onClick={() => handleOnclick(4)}
            value={state[4]}
            style={{ backgroundColor: backgroundColor[4] }}
          />
          <Block
            onClick={() => handleOnclick(5)}
            value={state[5]}
            style={{ backgroundColor: backgroundColor[5] }}
          />
        </div>
        <div className="row">
          <Block
            onClick={() => handleOnclick(6)}
            value={state[6]}
            style={{ backgroundColor: backgroundColor[6] }}
          />
          <Block
            onClick={() => handleOnclick(7)}
            value={state[7]}
            style={{ backgroundColor: backgroundColor[7] }}
          />
          <Block
            onClick={() => handleOnclick(8)}
            value={state[8]}
            style={{ backgroundColor: backgroundColor[8] }}
          />
        </div>
      </div>
      <div>
        <h1>winner of the game is :{winner}</h1>

        {winner === "Draw" ? (
          <>
            <h1>It's a Draw!</h1>
            <button onClick={handleRestartGame} className="newGame">
              Again Start New Game
            </button>
          </>
        ) : (
          winner && (
            <button onClick={handleRestartGame} className="newGame">
              Start New Game
            </button>
          )
        )}
      </div>
    </>
  );
}

export default App;
