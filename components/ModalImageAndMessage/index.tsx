import { useSession } from "next-auth/react";
import { RiArrowLeftSLine } from "react-icons/ri";
import styles from './styles.module.scss'

interface IModalImageAndMessage {
  image: string
  setImage: React.Dispatch<React.SetStateAction<string>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
  upload: () => Promise<void>
  loading: boolean
}

export default function ModalImageAndMessage({ image, setImage, setMessage, upload, loading }: IModalImageAndMessage) {
  const { data: session } = useSession()

  function handleBackButton() {
    setImage('')
    setMessage('')
  }

  function handleInputChange(e: string) {
    setMessage(e)
  }

  return (
    <>
      <div className={styles['image-title']}>
        <RiArrowLeftSLine onClick={handleBackButton} />
        <h1>New Post</h1>
        {loading ? (
          <img src="/spinner.gif" alt="Spinner gif" className={styles.spinner}/>
        ) : (
          <p onClick={upload}>Share</p>
        )}
      </div>
      <img src={image} alt="image" className={styles.image} />
      <div className={styles.message}>
        <img src={session?.user.image!} alt='User image' />
        <input type='text' placeholder='Type a message ...' onChange={e => handleInputChange(e.currentTarget.value)} />
      </div>
    </>
  )
}