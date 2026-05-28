import { useState } from 'react';

function generateGameBoard() {
    console.log('初期のゲームボードを作成中...');
    return Array(5000);
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);
    return <button onClick={() => setBoard(Math.random())}>Stateを更新</button>
}