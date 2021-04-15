import { createClient } from 'contentful';
import Comments from "../../components/Comments";
//import AddComment from "../../components/AddComment";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({ 
        content_type: 'cat',
    })

    const paths = res.items.map(item=> {
        return {
            params: { slug: item.fields.slug }
        }
    })
    return {
        paths, 
        fallback:false
    }
}

export async function getStaticProps({ params, comments }) {
    const resp = await client.getEntries({ content_type: 'comment' });
    const { items } = await client.getEntries({
        content_type: 'cat',
        'fields.slug': params.slug
    })
    return {
        props: { cat: items[0],
                comments: resp.items}
    }

    

    
    

}

const CatDetails = ({ cat}) => {
    const {from, to, lie } = cat.fields
    return (
        <div>
            <p>{from}</p>
            <p>{to}</p>
            <p>{lie}</p>
            <p>image cat</p>
            <p>comment name</p>
            <p>add comment</p>
            <p>add rating</p>
            <Comments />
        </div>
    );
}

export default CatDetails; 
