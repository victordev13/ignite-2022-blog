import { useEffect, useState } from 'react'
import { FaBuilding, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { HeaderTitle } from '../../components/HeaderTitle'
import { fetchPosts } from '../../services/blog'
import { IPost } from '../../types/post'
import { HeaderContainerContent, HeaderContainerLinksContent } from './styles'

export default function Home() {
  const [posts, setPosts] = useState<IPost[] | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const postsData = await fetchPosts()
      setPosts(postsData.items)
    }
    fetchPost()
  }, [])

  return (
    <>
      <HeaderTitle.Root>
        <HeaderTitle.Header>
          <HeaderTitle.Link to="https://github.com/victordev13">
            Github
          </HeaderTitle.Link>
        </HeaderTitle.Header>
        <HeaderTitle.Content>
          <HeaderContainerContent>
            <img
              src="https://avatars.githubusercontent.com/u/45896324?v=4"
              width={148}
              height={148}
              alt="Foto de Perfil de victor"
            />
            <div>
              <h1>Victor Carvalho</h1>
              <p>
                Como artista criar é minha paixão, e o desenvolvimento me traz
                um mundo de possibilidades. Atualmente sou Full Stack Developer,
                e curto bastante criar projetos Front End
              </p>
              <HeaderContainerLinksContent>
                <HeaderTitle.FooterItem
                  icon={<FaGithub />}
                  linkTo="https://github.com/victordev13"
                >
                  victordev13
                </HeaderTitle.FooterItem>
                <HeaderTitle.FooterItem icon={<FaBuilding />}>
                  Gênese cr
                </HeaderTitle.FooterItem>
                <HeaderTitle.FooterItem icon={<FaMapMarkerAlt />}>
                  Pinheiros-ES
                </HeaderTitle.FooterItem>
              </HeaderContainerLinksContent>
            </div>
          </HeaderContainerContent>
        </HeaderTitle.Content>
      </HeaderTitle.Root>
      <div>{posts?.map((p) => p.body)}</div>
    </>
  )
}
