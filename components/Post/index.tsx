import Image from "next/image"
import { RiHeart3Line, RiBookmarkLine } from "react-icons/ri"
import styles from './styles.module.scss'

export default function Post() {
  return (
    <div className={styles.post}>
      <div className={styles['photo-username']}>
        <img src="/photo.png" alt="photo" />
        <p>username</p>
      </div>
      <div className={styles['post-image']}>
        <Image
          src='/dog1.jpg'
          alt='post image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles.buttons}>
        <RiHeart3Line className={styles.icons}/>
        <RiBookmarkLine className={styles.icons}/>
      </div>
      <div className={styles['post-message']}>
        <p><span>username </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis odit, error quidem beatae autem accusantium fugiat architecto eveniet itaque nulla.</p>
      </div>
    </div>
  )
}