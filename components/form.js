const Form = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            content: e.target.content.value,
        };
        e.target.reset();
        onSubmit(data);
    };

    return (
        <section>
            <h3>Form Titel nog kiezen</h3>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label>
                        From:
                    <input type="text" name="name" required />
                    </label>
                    <label>
                        <label>
                            To:
                    <input type="text" name="name" required />
                        </label>
                    Your lie:
                    <textarea name="content" required maxLength="500"></textarea>
                    </label>
                    <input type="submit" value="Send your lie" />
                </div>

            </form>
        </section>
    );
};

export default Form;