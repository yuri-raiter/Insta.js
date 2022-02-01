import { ReactNode } from "react";
import styles from './styles.module.scss'

interface ILoginRegisterCard {
  children: ReactNode
  title: string
}

export default function LoginRegisterCard({ children, title }: ILoginRegisterCard) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Insta.js</h1>
        <div className={styles['content-wrapper']}>
          <div className={styles.content}>
            <h1>{title}</h1>
            { children }
          </div>
        </div>
      </div>
    </div>
  )
}