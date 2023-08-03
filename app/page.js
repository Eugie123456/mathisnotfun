import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
 
export default function Home() {
  return (
    <main className={styles.main}>
      <title>Math is not fun</title>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Math is not fun</code>
        </p>
        <div>
          <a
            href="https://www.mathisnotfun.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/mathisnotfun.svg"
              alt="Logo"
              className={styles.Logo}
              width={233}
              height={162}
              priority
            />
          </a>
        </div>
      </div>

      <section>
        Math is not fun.
        Math is useful but not fun.
        Math is difficult, repetitive, boring, stressful.
        Many math topics aren't revalent to real life.
      </section>
      <footer>
        By Eugene
      </footer>
          
    </main>
  )
}
