import { useState } from 'react'
import { IPost } from '../../types/post'
import Post from '../Post'
import { PostsContainer, SearchBarContainer } from './styles'

interface Props {
  posts: IPost[]
}

export default function PostGrid({ posts }: Props) {
  const [search, setSearch] = useState<string | null>(null)
  const handleSearch = (q: string) => setSearch(q)

  let filteredPosts = posts
  if (search && search.length > 3 && posts) {
    filteredPosts = posts.filter((i) =>
      search
        ? i.title.toLowerCase().includes(search.toLocaleLowerCase())
        : posts,
    )
  }
  const postsCount = filteredPosts?.length ?? 0

  return (
    <>
      <SearchBarContainer>
        <div>
          <h2>Publicações</h2>
          <span>{postsCount} publicações</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => handleSearch(e.target.value)}
            maxLength={48}
          />
        </div>
      </SearchBarContainer>
      <PostsContainer>
        {filteredPosts?.map((post) => (
          <Post
            number={post.number}
            key={post.number}
            title={post.title}
            content={post.preview}
            publishedAt={new Date(post.updated_at)}
          />
        ))}
      </PostsContainer>
    </>
  )
}
