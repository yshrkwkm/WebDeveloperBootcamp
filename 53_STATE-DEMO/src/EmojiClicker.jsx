import { v4 as uuid } from 'uuid';
import { useState } from 'react'

function randomEmoji() {
    const choices = ['😀', '😘', '😂', '😇', '🤩', '🤑', '🤐'];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}]);

    const addEmoji = () => {
        setEmojis((previousEmojis) => [...previousEmojis, {id: uuid(), emoji: randomEmoji()}])
    };

    const deleteEmoji = (id) => {
        setEmojis((previousEmojis => {
            return previousEmojis.filter((e) => e.id !== id);
        }));
    }

    const makeEverythingHeart = () => {
        setEmojis((previousEmojis) => {
            return previousEmojis.map(e => {
                return { ...e, emoji: '❤'};
           });
        });
    };

    return (
        <div>
            {
                emojis.map(e => (
                    <span key={e.id} style={{ fontSize: '4rem'}} onClick={() => deleteEmoji(e.id)}>{e.emoji}</span>
                ))
            }
            <button onClick={addEmoji}>絵文字を追加</button>
            <button onClick={makeEverythingHeart}>全てハートにする</button>
        </div>
    );
}