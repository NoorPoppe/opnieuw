const Comments = ({ comments =[]}) => {
    //const { name, comment, rating } = comments.fields
    return (
        <section>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong>
                        <p>{comment.comment}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Comments;
