import { useState, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarAlt,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from '../../components/Link'
import { api } from '../../libs/axios'
import Markdown from 'react-markdown'
import { PostContainer, PostInfo, Header, Details, PostContent } from './styles'

export interface PostType {
  title: string
  content: string
  author: string
  createdAt: string
  comments: number
  url: string
}

export function Post() {
  const { id } = useParams()

  const [post, setPost] = useState<PostType | undefined>()

  let postDate = new Date()
  if (post?.createdAt) {
    postDate = new Date(post.createdAt)
  }

  const formattedDate = formatDistanceToNow(postDate, {
    addSuffix: true,
    locale: ptBR,
  })

  async function fetchPost() {
    const response = await api.get(
      `/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${
        import.meta.env.VITE_GITHUB_REPOSITORY
      }/issues/${id}`,
    )
    const data = response.data

    setPost({
      title: data.title,
      content: data.body,
      author: data.user.login,
      createdAt: data.created_at,
      comments: data.comments,
      url: data.html_url,
    })
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <PostContainer>
      <PostInfo>
        <Header>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </NavLink>

          <Link href={post?.url} text="Ver no github" />
        </Header>

        <h1>{post?.title}</h1>

        <Details>
          <li>
            <FontAwesomeIcon icon={faGithub} /> <span>{post?.author}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            <span>{formattedDate}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />{' '}
            <span>{post?.comments} comentários</span>
          </li>
        </Details>
      </PostInfo>

      <PostContent>
        <Markdown>{post?.content}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
