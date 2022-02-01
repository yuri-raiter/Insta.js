import Image from 'next/image'
import LoginRegisterCard from '../../components/LoginRegisterCard.tsx'
import styles from './styles.module.scss'

export default function Login() {
  return (
    <LoginRegisterCard title='Log in'>
      <div className={styles.credentials}>
        <div className={styles['input-icons']}>
          <Image
            src='/user.svg'
            width={18}
            height={24}
            alt='User svg'
          />
          <input type="text" placeholder='Your username' />
        </div>
        <div className={styles['input-icons']}>
          <Image
            src='/password.svg'
            width={24}
            height={24}
            alt='Password svg'
          />
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