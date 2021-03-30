import { ReactNode } from "react";

import styles from '../styles/components/Content.module.css'

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <main className={styles.content}>
      {children}
    </main>
  )
}