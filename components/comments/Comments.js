const Comments = ({ comments = [] }) => {
    return (
        <section>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong>
                        <p>{comment.comment}</p>
                        <p>{comment.rating}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Comments;
