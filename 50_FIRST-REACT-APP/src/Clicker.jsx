// function handleClick() {
//     console.log('クリックされた');
// }

function handleMouseOver() {
    console.log('マウスオーバー');
}

function handleClick({message}) {
    alert(message);
}

export default function Clicker({message, buttonText}) {
    return (
        <div>
            {/* <p onMouseOver={handleMouseOver}>ホバーして</p> */}
            <button onClick={handleClick({message})}>{buttonText}</button>
        </div>
    );
}