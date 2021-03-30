import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

import styles from '../styles/pages/Entrar.module.css'

export default function Entrar() {
  const router = useRouter()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    router.push('/principal')
  }

  return (
    <div className={styles.signInContainer}>
      <Link href="/">
        <h3>Home</h3>
      </Link>
      <form onSubmit={handleSubmit} >
        <h2>Seja bem vindo de volta!</h2>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login"/>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}