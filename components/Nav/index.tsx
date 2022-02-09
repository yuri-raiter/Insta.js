import { useContext } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { ModalContext } from '../../contexts/ModalContext'
import { RiAddLine } from "react-icons/ri"
import styles from './styles.module.scss'

export default function Nav() {
  const { data: session } = useSession()
  const { setIsModalOpen } = useContext(ModalContext)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.logo}>Insta.js</h1>
        <div className={styles['button-user']}>
          <div className={styles.plus} onClick={() => setIsModalOpen(true)}>
            <RiAddLine className={styles.icons} />
          </div>
          {session && (
            <img 
              src={session.user?.image!} 
              alt="profile photo"
              onClick={() => signOut({
                callbackUrl: '/auth/signin'
              })} 
            />
          )}
        </div>
      </div>
    </div>
  )
} 