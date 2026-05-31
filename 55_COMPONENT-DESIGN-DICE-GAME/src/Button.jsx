import './Button.css';

export default function Button({clickFunc, label='クリックして'}) {
    return (
        <button onClick={clickFunc} className='Button'>
            {label}
        </button>
    );
}