import Head from 'next/head'
import { useRouter } from 'next/router'
//import { fetchEntries } from '../../utils/contentfulPosts'
//import Message from '../../components/Message'
import { useState } from "react";
//import ReactMarkdown from "react-markdown";
import Form from '../../components/form';
import Color from '../../components/color';

export default function createMessage({ data }) {
    const router = useRouter();
    const [createMessages, setCreateMessages] = useState(data.createMessages);

    const handleSubmit = async (createMessage) => {
        createMessage = data.id;
        const response = await fetch(
            `${process.env.CONTENTFUL_SPACE_ID}/createMessages/`,
            {
                method: "POST",
                body: JSON.stringify(createMessage),
                headers: {
                    "Content-Type": "cat",
                },
            }
        );
        if (response.ok) {
            const result = await response.json();
            const tmp = [...createMessages, result];
            setCreateMessages(tmp);
        }
    };
    return (
        <>
            <div className="container">
                <Form onSubmit={handleSubmit} />
                <Color />
            </div>
        </>
    )
}


//toy inladen 
/*
export async function getStaticProps() {
    const res = await fetchEntries()
    const data = await res.map((t) => {
        return t.fields
    })

    return {
        props: {
            data: data.pop(),
        },
        revalidate: 1,
    };
}

export async function getStaticPaths() {
    const res = await fetchEntries()
    const cornucopia = await res.map((p) => {
        return `/createMessage/${p.fields.slug}`
    })

    return { paths: cornucopia, fallback: false }
}
*/