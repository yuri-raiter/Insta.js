import Image from "next/image"
import { Heart } from 'react-feather'
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
          src='/post-image.jpg'
          alt='post image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles['like-button']}>
        <Heart />
      </div>
    </div>
  )
}