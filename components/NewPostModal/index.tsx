import { useContext } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../../contexts/ModalContext'
import { FaPhotoVideo } from 'react-icons/fa'
import styles from './styles.module.scss'
import { RiCloseLine } from 'react-icons/ri'

export default function NewPostModal() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

  function handleOnCloseModal() {
    return setIsModalOpen(false)
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleOnCloseModal}
      className={styles['react-modal-content']}
      overlayClassName={styles['react-modal-overlay']}
    >
      <RiCloseLine className={styles['close-button']} onClick={() => setIsModalOpen(false)} />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>New Post</h1>
        </div>
        <div className={styles.content}>
          <FaPhotoVideo />
          <p>Drag photos or videos here</p>
          <button>Browse From Computer</button>
        </div>
      </div>
    </Modal>
  )
}