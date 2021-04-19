import { createClient } from 'contentful'
import styles from '../../styles/Gallery.module.css'
import Comments from "../../components/comments/Comments";
import AddComment from "../../components/comments/AddComment";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//import Image from 'next/image'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export default function GalleryDetails({ cat }) {
    const router = useRouter();
    const { to, from, lie, toy, image } = cat.fields
    const [comments, setComments] = useState(cat.comments);
    
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
    };

    return (
        <div className={`${styles.item}${styles.item__width}`}>
                <p className={styles.from}>{from}</p>
                <p className={styles.image}>image cat</p>
                <p className={styles.lie} >{lie}</p>

            <Comments comments={comments} />
            <AddComment onSubmit={handleSubmit} />
        </div>
    )
}
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
