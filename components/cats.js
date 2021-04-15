const Cats = ({ cats = [] }) => {
    return (
        <section>
            <h3>Comments</h3>
            <ul>
                {cats.map((cat) => (
                    <li key={cat.id}>
                        <strong>{cat.from}</strong>
                        <p>{cats.to}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Cats;