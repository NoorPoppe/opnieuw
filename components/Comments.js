export default function Comments({ comment /*= []  */}) {
  const { name, rating, likes} = comment.fields
  console.log(comment);
  return (
    <section>
      
          <li key={id}>
            <strong>{name}</strong>
            <p>{rating}</p>
          </li>
    </section>
  );
};

