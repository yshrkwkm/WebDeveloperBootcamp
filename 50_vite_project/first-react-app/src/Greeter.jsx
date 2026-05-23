export default function Greeter({person = "みなさん", from = "匿名"}) {
    return (
        <>
            <h1>こんにちは {person}</h1>
            <h2>-{from}</h2>
        </>
    )
}