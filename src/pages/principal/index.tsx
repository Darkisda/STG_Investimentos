import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import styles from '../../styles/pages/Principal.module.css'
import React from 'react'

export default function Principal() {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <Header />
    </div>
  )
}