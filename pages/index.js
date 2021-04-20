import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main className={styles.container}>
        <h1 className={styles.title}>Let the cat out of the bag</h1>
        <p className={styles.subtext}>Now it is your change to confess a little lie!</p>
        <div className={styles.image} >
          <Image src="/cat-home.svg" width={599} height={652} alt="cat" />
        </div>
        <Link href="/createMessage/" ><a className={styles.button}  >Create your cat</a></Link>
      </main>
    </div>
  )
}
