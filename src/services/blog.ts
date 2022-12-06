import { api } from '../lib/githubApi'
import { IPost } from '../types/post'

const REPO = 'victordev13/ignite-2022-blog'

export const fetchPosts = async (query?: string) => {
  const { data } = await api.get<{ items: IPost[] }>(
    `/search/issues?q=${query || ''}%20repo:${REPO}`,
  )
  return data
}

export const fetchPostDetail = async (number: number) => {
  const { data } = await api.get<IPost>(`/repos/${REPO}/issues/` + number)

  return data
}
