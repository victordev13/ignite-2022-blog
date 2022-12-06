import { useEffect, useState } from 'react'
import { fetchPosts } from '../../services/blog'
import { IPost } from '../../types/post'

export default function Home() {
  const [posts, setPosts] = useState<IPost[] | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const postsData = await fetchPosts()
      setPosts(postsData.items)
    }
    fetchPost()
  }, [])

  return <div>{posts?.map((p) => p.body)}</div>
}
