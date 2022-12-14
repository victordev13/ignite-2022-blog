import { Link } from 'react-router-dom'
import { daysAgo } from '../../lib/date'
import { MarkdownInterpreter } from '../MarkdownInterpreter'
import { Container } from './styles'

interface PostProps {
  number: number
  title: string
  content: string
  publishedAt: Date
}

export default function Post({
  number,
  title,
  content,
  publishedAt,
}: PostProps) {
  const publishedAtDays = daysAgo(publishedAt)

  return (
    <Link to={'/posts/' + number}>
      <Container>
        <div>
          <span>{title}</span>
          <small>
            há {publishedAtDays} {publishedAtDays === 1 ? 'dia' : 'dias'}
          </small>
        </div>
        <p>
          <MarkdownInterpreter>{content}</MarkdownInterpreter>
        </p>
      </Container>
    </Link>
  )
}
