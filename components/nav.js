import Link from 'next/link';
import Image from 'next/image'
//import styles from '../styles/nav.module.css'

const Nav = () => {
    return (
        <header>
            <ul >
                <li><Link href="/"><a><Image src="/logo.png" width={164} height={141} alt="logo" /></a></Link></li>
                <div >
                    <li><Link href="/gallery/"><a  >Gallery</a></Link></li>
                    <li><Link href="/createMessage/"><a  >Create your message</a></Link></li>
                </div>
            </ul>
        </header>
    )

};

export default Nav