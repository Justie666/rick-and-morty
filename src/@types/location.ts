export interface Locations {
  info: Info
  results: Location[]
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

interface Info {
  count: number
  pages: number
  next: null | string
  prev: null | string
}
