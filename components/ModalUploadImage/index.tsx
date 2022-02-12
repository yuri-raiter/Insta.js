import { BsFillCameraFill } from 'react-icons/bs'
import styles from './styles.module.scss'

interface IModalUploadImage {
  setImage: React.Dispatch<React.SetStateAction<string>>
}

export default function ModalUploadImage({ setImage }: IModalUploadImage) {
  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()
    const img = e.target.files![0]
    
    reader.readAsDataURL(img)
    reader.onload = readerEvent => {
      const imgDataURL = readerEvent.target?.result
      setImage(imgDataURL as string)
    }
  }

  return (
    <>
      <div className={styles['new-post']}>
        <h1>New Post</h1>
      </div>
      <div className={styles.content}>
        <BsFillCameraFill />
        <p>Upload an image</p>
        <label htmlFor='file'>Browse From Computer</label>
        <input id='file' type="file" accept='image/*' hidden onChange={onImageChange} />
      </div>
    </>
  )
}