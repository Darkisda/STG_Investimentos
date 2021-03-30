import Link from 'next/link';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingBackground} />

      <div className={styles.landingContent}>
        <img src="/images/STG_Investimentos.png" alt="STG Investimentos"/>
        <button>
          <Link href="/entrar" >
            ENTRAR
          </Link>
        </button>
      </div>

    </div>
  )
}
