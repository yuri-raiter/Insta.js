import { useContext, useState } from 'react'
import Modal from 'react-modal'
import { ModalContext } from '../../contexts/ModalContext'
import ModalUploadImage from '../ModalUploadImage'
import ModalImageAndMessage from '../ModalImageAndMessage'
import { db, storage } from '../../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import { useSession } from 'next-auth/react'
import styles from './styles.module.scss'

export default function NewPostModal() {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
  const [image, setImage] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { data: session } = useSession()

  function handleOnCloseModal() {
    setIsModalOpen(false)
    setImage(img => img.length ? '' : img)
    setMessage('')
    setLoading(ld => ld ? false : ld)
    return
  }

  async function uploadToCloudStorage() {
    if (loading) return

    setLoading(true)

    // collections name will be the user's uid
    // so each user will have its own collection of posts
    const docRef = await addDoc(collection(db, session?.user.uid!), {
      username: session?.user.username!,
      message: message,
      profileImage: session?.user.image!,
      timestamp: serverTimestamp()
    })

    console.log('New doc added with ID', docRef.id)

    const imageRef = ref(storage, `${session?.user.uid!}/${docRef.id}/image`)

    await uploadString(imageRef, image, 'data_url').then(async () => {
      const downloadURL = await getDownloadURL(imageRef)
      await updateDoc(doc(db, session?.user.uid!, docRef.id), {
        image: downloadURL
      })
    })

    setLoading(false)
    setIsModalOpen(false)
    setImage('')
    setMessage('')
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
          <ModalImageAndMessage image={image} setImage={setImage} setMessage={setMessage} upload={uploadToCloudStorage} loading={loading} />
        ) : (
          <ModalUploadImage setImage={setImage} />
        )}
      </div>
    </Modal>
  )
}