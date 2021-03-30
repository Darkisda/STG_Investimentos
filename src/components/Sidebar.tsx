import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import styles from '../styles/components/Sidebar.module.css'

export default function Sidebar() {
  const [isToggle, setToggle] = useState(false)

  function showSideBar() {
    setToggle(!isToggle)
  }

  return (
    <div>
      <div className={styles.buttonContainer}>
        <button type="button" onClick={showSideBar}>
          <FiMenu />
        </button>
      </div>
      <div className={isToggle ? `${styles.sidebarContainer} ${styles.toggle}` : styles.sidebarContainer } >
        <Link href="/principal">
          <img src="/images/STG_Investimentos.png" alt="STG Investimentos"/>
        </Link>

        <ul>
          <li>
            <Link href="/principal/cadastrar">Cadastrar Clientes</Link>
          </li>
          <li>
            <Link href="/principal/listar">Listar Clientes</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}