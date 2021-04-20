import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/NavBar.module.css'

const Navbar = () => {
    return (
        <header>
            <ul className={styles.nav__wrapper} >
                <li><Link href="/"><a><Image src="/logo.png" width={164} height={141} alt="logo" /></a></Link></li>
                <div className={styles.nav} >
                    <li><Link href="/gallery/"><a className={styles.button} >Gallery</a></Link></li>
                    <li><Link href="/createMessage/"><a className={styles.button} >Create your message</a></Link></li>
                </div>
            </ul>
        </header>
    )

};

export default Navbar;