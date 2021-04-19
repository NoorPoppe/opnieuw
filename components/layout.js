import Footer from "./footer"
import Nav from "./nav"
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

        </Head>
        <Nav />
        { children}
        <Footer />
    </div>);
}

export default Layout;