import { useState } from 'react';

export default function ScoreKeeper() {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
    function increaseP1Score() {
        const newScores = { ...scores, p1Score: scores.p1Score + 1 };
        setScores((previousScores) => {
            return { ...previousScores, p1Score: previousScores.p1Score + 1 };
        });
    }
    function increaseP2Score() {
        const newScores = { ...scores, p2Score: scores.p2Score + 1 };
        setScores((previousScores) => {
            return { ...previousScores, p2Score: previousScores.p2Score + 1 };
        });
    }
    return (
        <div>
            <p>プレイヤー1： {scores.p1Score}</p>
            <p>プレイヤー2： {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 プレイヤー1</button>
            <button onClick={increaseP2Score}>+1 プレイヤー2</button>
        </div>
    );
}