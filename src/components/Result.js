import React from "react";
const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">You Score {score}/5 Correct answers</div>
        <div className="playBtn" onClick={playAgain}>Play Again</div>
    </div>
);
export default Result;