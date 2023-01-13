import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        if (!isUser) {
            router.push(
                '/'
            )
        }
    }, [isUser])



  return (
    <>
      <Head>
        <title>next router login</title>
        <meta name="description" content="i love winnie the pooh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            COUNTER PAGE&nbsp;
            <code className={styles.code}>Welcome {isUser}</code>
          </p>
        </div>

  
        <div className={styles.grid}>
            <h2 className={styles.text}>
                The number is:
            </h2>
            <p className={styles.text}>
                {number}
            </p>
            <button className={styles.counterbutton} onClick={() => setNumber(number + 1)}>Increment</button>
            <button className={styles.counterbutton} onClick={() => setNumber(number - 1)}>Decrement</button>
        </div>
      </main>
    </>
  )
}
