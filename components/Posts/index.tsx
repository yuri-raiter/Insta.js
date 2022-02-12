import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import Post from '../Post'
import styles from './styles.module.scss'

export default function Posts() {
  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData>[]>([])
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      return onSnapshot(
        query(
          collection(db, session.user.uid!),
          orderBy('timestamp', 'desc')
        ),
        snapshot => setPosts(snapshot.docs)
      )
    }
  }, [db, session])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {posts.map(post => (
          <Post
            key={post.id}
            username={post.data().username}
            profileImage={post.data().profileImage}
            image={post.data().image}
            message={post.data().message}
          />
        ))}
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  )
}