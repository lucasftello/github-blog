import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Link } from '../../../../components/Link'
import { api } from '../../../../libs/axios'
import { ProfileContainer, Title, Infos, Details } from './styles'

interface User {
  name: string
  profileLink: string
  avatarUrl: string
  bio: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<User | undefined>()

  async function fetchUserData() {
    const response = await api.get(
      `/users/${import.meta.env.VITE_GITHUB_USERNAME}`,
    )
    const data = response.data

    setUser({
      name: data.name,
      profileLink: data.html_url,
      avatarUrl: data.avatar_url,
      bio: data.bio,
      login: data.login,
      company: data.company,
      followers: data.followers,
    })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <ProfileContainer>
      <img src={user?.avatarUrl} alt="" />

      <Infos>
        <Title>
          <h1>{user?.name}</h1>
          <Link href={user?.profileLink} target="_blank" text="Github" />
        </Title>

        {user?.bio && <p>{user.bio}</p>}

        <Details>
          <li>
            <FontAwesomeIcon icon={faGithub} /> <span>{user?.login}</span>
          </li>

          {user?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} /> <span>{user.company}</span>
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faUserGroup} />{' '}
            <span>{user?.followers} seguidores</span>
          </li>
        </Details>
      </Infos>
    </ProfileContainer>
  )
}
