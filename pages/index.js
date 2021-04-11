import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cat out of the bag - home</title>
        <meta name="keywords" content="cats"></meta>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Let the cat out of the bag</h1>
        <p>Now it is your change to confess a little lie!</p>
        <Link href="/message" ><a>Make your cat in the bag</a></Link>
      </main>
    </div>
  )
}
