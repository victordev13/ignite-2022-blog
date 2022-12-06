import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { fetchPostDetail } from '../../services/blog'
import { IPost } from '../../types/post'

export default function Post() {
  const [post, setPost] = useState<IPost | null>(null)

  const number = useLoaderData()

  useEffect(() => {
    if (typeof number !== 'number') return
    const fetchPost = async () => {
      const postData = await fetchPostDetail(number as number)
      setPost(postData)
    }
    fetchPost()
  }, [number])

  return <>{post?.number}</>
}
