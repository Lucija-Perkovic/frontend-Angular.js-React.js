import { type Movie } from '../../models/movies'
import { type CustomAction } from '../actions/uiActions'
import { SEARCH_MOVIE_SUCCESS } from '../actions/movieActions'

export interface MovieState {
  movies: Movie[]
  totalNrOfPages: number
  currentPage: number
}

const initialState: MovieState = {
  movies: [],
  totalNrOfPages: 0,
  currentPage: 0
}

function movieReducer (state: MovieState | undefined, action: CustomAction): MovieState {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload.results,
        totalNrOfPages: action.payload.total_pages,
        currentPage: action.payload.page
      }
    default:
      return state
  }
}

export default movieReducer
