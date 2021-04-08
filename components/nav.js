import Link from 'next/link';

const Nav = () => {
    return(
        <header>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/galleries/gallery"><a>Gallery</a></Link></li>
                <li><Link href="/message"><a>Create your message</a></Link></li>
            </ul>
        </header>
    )

};

export default Nav