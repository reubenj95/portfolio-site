export interface PortfolioEntry {
  entryId: number
  entryTitle: string
  sub_heading: string
  status: string
  demo_url: string
  repo_url: string
  description: string
  date: Date
  collaboratorName: string
  image_url: string
  image_alt_text: string
  client: string
  client_url: string
}

export interface FullPorfolio extends PortfolioEntry {
  image_url: string
  name: string
}
