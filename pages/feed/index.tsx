import Nav from "../../components/Nav";
import Posts from "../../components/Posts"
import NewPostModal from "../../components/NewPostModal";
import { ModalProvider } from "../../contexts/ModalContext";
import styles from './styles.module.scss'

export default function Feed() {
  return (
    <div className={styles.container}>
      <ModalProvider>
        <Nav />
        <Posts />
        <NewPostModal />
      </ModalProvider>
    </div>
  )
}