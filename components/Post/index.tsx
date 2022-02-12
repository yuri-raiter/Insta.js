import Image from "next/image"
import { RiHeart3Line, RiBookmarkLine } from "react-icons/ri"
import styles from './styles.module.scss'

interface IPost {
  username: string
  profileImage: string
  image: string
  message: string
}

export default function Post({ username, profileImage, image, message }: IPost) {
  return (
    <div className={styles.post}>
      <div className={styles['photo-username']}>
        <img src={profileImage} alt="photo" />
        <p>{username}</p>
      </div>
      <div className={styles['post-image']}>
        {image && (
          <Image
            src={image}
            alt='post image'
            layout='fill'
            objectFit='cover'
          />
        )}
      </div>
      <div className={styles.buttons}>
        <RiHeart3Line className={styles.icons} />
        <RiBookmarkLine className={styles.icons} />
      </div>
      <div className={styles['post-message']}>
        <p><span>{username} </span>{message}</p>
      </div>
    </div>
  )
}