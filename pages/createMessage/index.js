//import { fetchEntries } from '../../utils/contentfulCats'
import ReactDOM from 'react-dom';
import Form from '../../components/form';
import { createClient } from "contentful";
//import Forms from '../../components/Forms';

function createMessage({ cats , toys }) {
    console.log(cats)
    return (
        <>
            <div>
                <Form cats={toys} />
            </div>
        </>
    );
}

export default createMessage;

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: '_3o5CBmEtJheQrX4Dl7rfQXy08cMxtsf_GvRPXHGyH8',
    })

    const res = await client.getEntries({ content_type: "toy" })

    return {
        props: {
            toys: res.items,
        },
        revalidate: 1
    }
}

