import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    };
    const addThree = () => {
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);
    }
    const setToTen = () => {
        setCount(10);
    };

    return (
        <div>
            <p>値： {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>10に設定</button>
        </div>
    )
}