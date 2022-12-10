type ILabel = {
  name: string
  color: string
}

export type IUser = {
  id: number
  login: string
  avatar_url: string
}

export type IPost = {
  url: string
  number: number
  title: string
  body: string
  preview: string
  user: IUser
  labels: ILabel[]
  created_at: string
  updated_at: string
}
