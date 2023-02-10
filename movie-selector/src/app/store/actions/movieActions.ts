export const SEARCH_MOVIE_REQUEST = 'SEARCH_MOVIE_REQUEST'

export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS'

export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE'

export function requestSearchMovie (searchParam: string): any {
  return { type: SEARCH_MOVIE_REQUEST, searchParam }
}
