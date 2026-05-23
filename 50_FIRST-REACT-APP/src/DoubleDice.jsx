export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3 + 1);
    const num2 = Math.floor(Math.random() * 3 + 1);
    const isWinner = num1 === num2;
    const styles = { color: isWinner ? 'green' : 'red', fontSize: '40px' };
    return (
        <div className="DoubleDice" style={styles}>
            <h2>ダブルダイス</h2>
            {isWinner && <h3>勝ち！</h3>}
            <p>1つめの出目： {num1}</p>
            <p>2つめの出目： {num2}</p>
        </div>
    );
}