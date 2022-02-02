import Nav from "../../components/Nav";
import Posts from "../../components/Posts"
import styles from './styles.module.scss'

export default function Feed() {
  return (
    <div className={styles.container}>
      <Nav />
      <Posts />
    </div>
  )
}