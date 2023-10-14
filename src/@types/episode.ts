export interface Episodes {
  info: Info
  results: Episode[]
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

interface Info {
  count: number
  pages: number
  next: null | string
  prev: null | string
}
