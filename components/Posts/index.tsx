import Post from '../Post'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}