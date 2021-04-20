export default function createMessage({ to, from }) {
    return (
        <div>
            <div>
                <div>To: {to}</div>
                <div>From: {from}</div>
            </div>
        </div>
    )
}
