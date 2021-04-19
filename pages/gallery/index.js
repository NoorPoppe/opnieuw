import Link from 'next/link'
import { createClient } from 'contentful';
import GalleryItem from '../../components/GalleryItem';
import styles from '../../styles/Gallery.module.css'


export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        //accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({ content_type: 'cat' });
    return {
        props: {
            cats: res.items
        }, 
        revalidate: 1
    }

}

const Gallery = ({cats}) => {
    return ( 
        <>
            <h1 className={styles.title}>The gallery</h1>
            <div className={styles.cat}>
                {cats.map(cat => (
                    <GalleryItem key={cat.sys.id} cat={cat} />
                ))}
            </div>
        </>
     );
}
 
export default Gallery;

