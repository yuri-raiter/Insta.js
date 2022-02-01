import LoginRegisterCard from "../../components/LoginRegisterCard.tsx"
import styles from './styles.module.scss'

export default function Register() {
  return (
    <LoginRegisterCard title='Register'>
      <div className={styles['user-data']}>
        <div className={styles.name}>
          <div className={styles['input-label']}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" placeholder="John" id='first-name' />
          </div>
          <div className={styles['input-label']}>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" placeholder="Doe" id='last-name' />
          </div>
        </div>
        <div className={styles['username-password']}>
          <div className={styles['input-label']}>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="johndoe" id='username' />
          </div>
          <div className={styles['input-label']}>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
          </div>
        </div>
        <div className={styles['link-button']}>
          <p>Already have an account? <a href='#'>Log in</a></p>
          <button type="submit">Register</button>
        </div>
      </div>
    </LoginRegisterCard>
  )
}