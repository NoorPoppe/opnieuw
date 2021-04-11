import Link from 'next/link';
import Image from 'next/image'

const Nav = () => {
    return (
        <header>
            <ul>
                <li><Link href="/"><a><Image src="/logo.png" width={164} height={141} alt="logo" /></a></Link></li>
                <li><Link href="/galleries/"><a>Gallery</a></Link></li>
                <li><Link href="/message"><a>Create your message</a></Link></li>
            </ul>
        </header>
    )

};

export default Nav