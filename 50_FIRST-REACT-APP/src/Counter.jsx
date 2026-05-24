import { useState } from 'react';

export default function Counter() {
    const [num, setNum] = useState(5);
    const changeNum = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <p>現在の値は: {num}</p>
            <button onClick={changeNum}>増やす</button>
        </div>
    )
}