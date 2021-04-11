import Form from '../components/form';
import Head from 'next/head'

const Message = () => {
    return ( 
        <>
            <Head>
                <title>Cat out of the bag - Studio</title>
                <meta name="keywords" content="cats"></meta>
                <link rel="icon" href="/logo.png" />
            </Head>
            <h1>Create your message</h1>
            <div >
                <Form />
            </div>
        </>
     );
}
 
export default Message;
