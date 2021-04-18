const AddComment = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            comment: e.target.comment.value,
        };
        e.target.reset();
        onSubmit(data);
    };

    return (
        <section>
            <h3>Add comment</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    Name:
          <input type="text" name="name" required />
                </label>
                <label>
                    Comment:
          <textarea name="comment" required maxLength="500"></textarea>
                </label>
                <input type="submit" value="Send" />
            </form>
        </section>
    );
};

export default AddComment;