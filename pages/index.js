import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <li><Link href = "/" >Home</Link></li>
          <li><Link href = "/about" >About</Link></li>
          <li><Link href = "/blog" >Blog</Link></li>
          <li><Link href = "/contact" >Contact</Link></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <div className={styles.head}>
          <div className={styles.title}>
          <h1>Hunting Coder</h1>
          </div>
          <Image src="/homeimg.jpg" width={237} height={158}/>
          <div className={styles.description}>
          <p>A blog for hunting coders by a huntig coder</p>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blogItems}>
            <h1>How to learn Javascript in 2023</h1>
            <p>Javascript is the language used to design the logic for web</p>
          </div>
          <div className={styles.blogItems}>
            <h1>How to learn Javascript in 2023</h1>
            <p>Javascript is the language used to design the logic for web</p>
          </div>
          <div className={styles.blogItems}>
            <h1>How to learn Javascript in 2023</h1>
            <p>Javascript is the language used to design the logic for web</p>
          </div>
        </div>
      </main>
    </>
  )
}
