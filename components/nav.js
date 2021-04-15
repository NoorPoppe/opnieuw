import Link from 'next/link';
import Image from 'next/image'
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <header>
            <ul className={styles.nav}>
                <li><Link href="/"><a><Image src="/logo.png" width={164} height={141} alt="logo" /></a></Link></li>
                <div className={styles.nav__wrapper}>
                    <li><Link href="/galleries/"><a className={styles.button} >Gallery</a></Link></li>
                    <li><Link href="/message"><a className={styles.button} >Create your message</a></Link></li>
                </div>


            </ul>
        </header>
    )

};

export default Nav