import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingDemo() {
    const [score, setScore] = useState(3);

    return <div>
        <h1>Ratingデモ. 現在の評価は： {score}</h1>
        <Rating
            name="simple-controlled"
            value={score}
            onChange={(event, newValue) => {
                setScore(newValue);
            }}
        />
    </div>
}