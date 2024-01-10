import { NavLink } from 'react-router-dom'
import { PostContainer, PostHeader } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

export interface PostType {
  id: number
  title: string
  content: string
  createdAt: string
}

interface Props {
  post: PostType
}

export function PostCard({ post }: Props) {
  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostContainer>
      <NavLink to={`/post/${post.id}`}>
        <PostHeader>
          <h1>{post.title}</h1>
          <span>{formattedDate}</span>
        </PostHeader>

        <p>{post.content.substring(0, 250)}</p>
      </NavLink>
    </PostContainer>
  )
}
