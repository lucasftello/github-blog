import { useCallback, useEffect, useState } from 'react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { api } from '../../libs/axios'
import { Profile } from './components/Profile'
import { PostCard, PostType } from './components/PostCard'
import {
  HomeContainer,
  Posts,
  PostsHeader,
  PostsList,
  PostsSearchForm,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function Home() {
  const [posts, setPosts] = useState<PostType[]>([])

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchForm(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  const fetchPosts = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:${
        import.meta.env.VITE_GITHUB_USERNAME
      }/${import.meta.env.VITE_GITHUB_REPOSITORY}`,
    )
    const data = response.data.items

    const posts: PostType[] = []

    data.map((post: any) => {
      return posts.push({
        id: post.number,
        title: post.title,
        content: post.body,
        createdAt: post.created_at,
      })
    })

    setPosts(posts)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />

      <Posts>
        <PostsHeader>
          <span>Publicações</span>
          <span>6 publicações</span>
        </PostsHeader>

        <PostsSearchForm onSubmit={handleSubmit(handleSearchForm)}>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </PostsSearchForm>

        <PostsList>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostsList>
      </Posts>
    </HomeContainer>
  )
}
