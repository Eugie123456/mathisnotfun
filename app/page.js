import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
 
export default function Home() {
  return (
    <main className={styles.main}>
      <title>Math is not fun</title>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Math is fun</code>
        </p>
        <div>
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
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
        Math is fun.
        Math is very fun.
        You will need math in every part of your career.
      </section>
      <section>
        This is a personal opinion.
      </section>
      <footer>
        -By Eugene-
      </footer>
          
    </main>
  )
}
