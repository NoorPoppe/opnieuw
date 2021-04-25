import { fetchEntries } from '../../utils/contentfulCats'
import ReactDOM from 'react-dom';
import Form from '../../components/form';
import { createClient } from "contentful-management";
//import Forms from '../../components/Forms';

function createMessage() {

    return (
        <>
            <div>
                <Form />
                {/*<Forms />*/}
            </div>
        </>
    );
}

export default createMessage;
/*
export async function getStaticProps() {
    const res = await fetchEntries()
    const cats = await res.map((cat) => {
        return cat.fields
    })

    console.log(cats)

    return {
        props: {
           cats,
        },
    }
}
*/