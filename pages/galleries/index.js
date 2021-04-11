import Link from 'next/link'
export const getStaticProps = async() => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await resp.json();
    return {
        props: {
            data,
        },
    };

}
import Head from 'next/head'
const Gallery = ({data}) => {
    return ( 
        <>
            <Head>
                <title>Cat out of the bag - Gallery</title>
                <meta name="keywords" content="cats"></meta>
                <link rel="icon" href="/logo.png" />
            </Head>
            <h1>The gallery</h1>
            <div >
                {data.map((user) => (
                    <Link href={'/galleries/' + user.id} key={user.id} >
                        <a><h3>{user.name}</h3>
                            <p>{user.email}</p></a> 
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Gallery;
