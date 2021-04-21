import { createClient } from 'contentful'
import CatCard from '../../components/CatsCard'
import styles from '../../styles/Gallery.module.css'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "cat" })
  const resc = await client.getEntries({ content_type: "comment" })

  return {
    props: {
      cats: res.items,
      comment: resc.items,
    },
    revalidate: 1
  }
}

const Gallery = ({cats}) => {
    console.log(cats)
    return (
        <>
            <h1 className={styles.title}>gallery of lies</h1>
            <div className={styles.cat}>
                {cats.map(cat => (
                    <CatCard key={cat.sys.id} cat={cat} />
                ))}
            </div>
        </>
    );
}

export default Gallery;
