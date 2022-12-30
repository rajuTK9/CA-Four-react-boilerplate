import React from "react";

export default function Result({ score, restart }) {
  return (
    <main className="main resultContainer">
      <h1>Final Score</h1>
      <h3>
        You scored {score} out of 5 - ({(score * 100) / 5}%)
      </h3>
      <button className="restartBtn" onClick={restart}>
        Restart Game
      </button>
    </main>
  );
}
