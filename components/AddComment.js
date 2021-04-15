export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'comment' });
  return {
    props: {
      comments: res.items
    }
  }

}

const AddComment = ({ onSubmit,}) => {
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
      <h3>Add comment</h3>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input type="text" name="name" required />
        </label>
        <label className={styles.label}>
          Comment:
          <textarea name="content" required maxLength="500"></textarea>
        </label>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default AddComment;
