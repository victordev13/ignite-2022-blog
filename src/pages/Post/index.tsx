import { useEffect, useState } from 'react'
import { FaComment, FaGithub } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { HeaderTitle } from '../../components/HeaderTitle'
import { MarkdownInterpreter } from '../../components/MarkdownInterpreter'
import { daysAgo } from '../../lib/date'
import { fetchPostDetail } from '../../services/blog'
import { IPost } from '../../types/post'
import { Container, Content } from './styles'

export default function Post() {
  const [post, setPost] = useState<IPost | null>(null)

  const { number } = useParams()

  useEffect(() => {
    if (!number) return
    const fetchPost = async () => {
      const postData = await fetchPostDetail(number)
      setPost(postData)
    }
    fetchPost()
  }, [number])

  const publishedAt = post ? daysAgo(new Date(post.updated_at)) : null

  return (
    <Container>
      {post ? (
        <>
          <HeaderTitle.Root fixedHeight={178}>
            <HeaderTitle.Header showBackButton>
              <HeaderTitle.Link to={post.html_url}>
                Ver no Github
              </HeaderTitle.Link>
            </HeaderTitle.Header>
            <HeaderTitle.Content>
              <h1>{post.title}</h1>
            </HeaderTitle.Content>
            <HeaderTitle.Footer>
              <HeaderTitle.FooterItem
                icon={<FaGithub />}
                linkTo="https://github.com/victordev13"
              >
                victordev13
              </HeaderTitle.FooterItem>
              {publishedAt && (
                <HeaderTitle.FooterItem icon={<FaGithub />}>
                  {`há ${publishedAt} ${publishedAt === 1 ? 'dia' : 'dias'}`}
                </HeaderTitle.FooterItem>
              )}
              <HeaderTitle.FooterItem icon={<FaComment />}>
                {post.comments + ' comentários'}
              </HeaderTitle.FooterItem>
            </HeaderTitle.Footer>
          </HeaderTitle.Root>
          <Content>
            <MarkdownInterpreter>{post.body}</MarkdownInterpreter>
          </Content>
        </>
      ) : (
        <>loading...</>
      )}
    </Container>
  )
}
