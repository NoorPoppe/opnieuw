import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  /*        <Image className={styles.image} src="/cat-home.svg" width={599} height={652} alt="cat" /> */
  return (
    <div>
      <main className={styles.container}>
        <h1 className={styles.title}>Let the cat out of the bag</h1>
        <p className={styles.subtext}>Now it is your change to confess a little lie!</p>
        <img className={styles.image} src="./cat-home.svg" width={599} height={652} alt="cat"  />
        <Link href="/createMessage/" ><a className={styles.button}  >Create your cat</a></Link>
      </main>
    </div>
  )
}
