import styles from './styles.module.scss'

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>Insta.js</h1>
        <div className={styles['user-greetings']}>
          <img src="/photo.png" alt="profile photo" />
          <p>Hey, User!</p>
        </div>
      </div>
    </div>
  )
} 