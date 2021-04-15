import Form from '../components/form';
import Head from 'next/head'
import { createClient } from 'contentful';

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
    const res = await client.getEntries({ content_type: 'cat' });
    return {
        props: {
            cats:res.items
        }
    }

}

const Message = ({cats}) => {
    return (
        <>
            <h1>Create your message</h1>
            <div >
                <Form />
            </div>
        </>
    );
}

export default Message;
