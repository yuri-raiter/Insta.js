import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../../contexts/ModalContext'
import styles from './styles.module.scss'
import ModalUploadImage from '../ModalUploadImage'
import ModalImageAndMessage from '../ModalImageAndMessage'

export default function NewPostModal() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
  const [image, setImage] = useState<string>('')

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
      <div className={styles.container}>
        {image.length ? (
          <ModalImageAndMessage image={image} setImage={setImage} />
        ) : (
          <ModalUploadImage setImage={setImage}/>
        )}
      </div>
    </Modal>
  )
}