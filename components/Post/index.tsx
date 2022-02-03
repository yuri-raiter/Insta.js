import Image from "next/image"
import { Bookmark, Heart } from 'react-feather'
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
        <Heart />
        <Bookmark />
      </div>
      <div className={styles['post-message']}>
        <p><span>username </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis odit, error quidem beatae autem accusantium fugiat architecto eveniet itaque nulla.</p>
      </div>
    </div>
  )
}