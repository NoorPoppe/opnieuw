import Form from '../components/form';
import Head from 'next/head'

const Message = () => {
    return ( 
        <>
            <Head>
                <title>cat out of the bag - Studio</title>
                <meta name="keywords" content="cats"></meta>
            </Head>
            <h1>Create your message</h1>
            <div >
                <Form />
            </div>
        </>
     );
}
 
export default Message;
