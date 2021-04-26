import { createClient } from 'contentful'
import { fetchEntries } from '../../utils/contentfulCats'

//import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import { useState } from "react";
import Skeleton from '../../components/Skeleton'
import Comments from '../../components/comments/Comments'
import AddComment from '../../components/comments/AddComment'


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: "_3o5CBmEtJheQrX4Dl7rfQXy08cMxtsf_GvRPXHGyH8",
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: "cat"
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'cat',
        'fields.slug': params.slug
    })

    if (!items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { cat: items[0] },
        revalidate: 1
    }
}

const GalleryDetail = ({ cat }) => {
    //if (!cat) return <Skeleton />
    const { to, from, lie, types, toys } = cat.fields
    /*   const [comments, setComments] = useState(cat.comments);
 
        const handleSubmit = async (comment) => {
            comment.gallery = cat.id;
            const response = await fetch(
                `${process.env.CONTENTFUL_SPACE_ID}/comments/`,
                {
                    method: "POST",
                    body: JSON.stringify(comment),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
                );    
                if (response.ok) {
                    const result = await response.json();
                    const tmp = [...comments, result];
                    setComments(tmp);
                }
        }
    */

    return (
        <>
            <div className="banner">
                <Image
                    src={'https:' + types[0].fields.image.fields.file.url}
                    width={types[0].fields.image.fields.file.details.image.width}
                    height={types[0].fields.image.fields.file.details.image.height}
                />
            </div>

            <div >
                <p>{lie}</p>
                <p>{to}</p>
                <p>{from}</p>
                <Image
                    src={'https:' + toys[0].fields.image[0].fields.file.url}
                    height={toys[0].fields.image[0].fields.file.details.image.height}
                    width={toys[0].fields.image[0].fields.file.details.image.width}
                />
                {/*<Comments comments={comments} />
                <AddComment onSubmit={handleSubmit} />*/}
            </div>

        </>
    );
}

export default GalleryDetail;
