import LoginRegisterCard from '../../components/LoginRegisterCard.tsx'
import { User, Key } from 'react-feather'
import styles from './styles.module.scss'

export default function Login() {
  return (
    <LoginRegisterCard title='Log in'>
      <div className={styles.credentials}>
        <div className={styles['input-icons']}>
          <User />
          <input type="text" placeholder='Your username' />
        </div>
        <div className={styles['input-icons']}>
          <Key />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div className={styles['links-and-button']}>
        <div className={styles.links}>
          <p>Create an account</p>
          <p>Forgot password?</p>
        </div>
        <button type="submit">Sign in</button>
      </div>
    </LoginRegisterCard>
  )
}