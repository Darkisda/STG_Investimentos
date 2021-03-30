import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <p>Olá, <strong>Luan</strong></p>
        <button>Sair</button>
      </div>
    </header>
  )
}