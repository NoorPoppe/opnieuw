export default function createMessage({ img, to, from }) {
    return (
        <div className={styles.card}>
            <img src={img.url} alt={img.alt} width={img.size.width} height={img.size.height} />
            <div className={styles.tofrom}>
                <div>To: {to}</div>
                <div>From: {from}</div>
            </div>
        </div>
    )
}
