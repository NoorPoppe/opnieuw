import Footer from "./footer"
import Nav from "./NavBar"
import Head from "next/head";

const Layout = ({ children }) => {
    return (<div>
        <Head>
            <title>Cat out of the bag </title>
            <meta name="keywords" content="cats"></meta>
            <link rel="icon" href="/logo.png" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Nav />
        { children}
        <Footer />
    </div>);
}

export default Layout;