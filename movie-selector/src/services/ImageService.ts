const BASE_URL = 'https://image.tmdb.org/t/p/original'

export function getImageUrl (imageBackdropPath: string): string {
  return BASE_URL + imageBackdropPath
}
