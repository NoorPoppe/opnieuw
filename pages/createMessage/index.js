import { fetchEntries } from '../../utils/contentfulCats'
import ReactDOM from 'react-dom';
import Form from '../../components/form';
//import { createClient } from "contentful-management";
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
/*
export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCES_KEY,
    })

    const res = await client.getEntries({ content_type: "cats" })

    return {
        props: {
            cats: res.items,
        }
    }
}
*/


/*
export async function getStaticProps() {
    const res = await fetchEntries()
    const cats = await res.map((cat) => {
        return cat.fields
    })

    return {
        props: {
           cats,
        },
    }
}
*/

