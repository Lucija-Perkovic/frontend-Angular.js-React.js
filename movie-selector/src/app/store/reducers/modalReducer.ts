import { type CustomAction } from '../actions/uiActions'
import { CLOSE_MODAL, SHOW_MODAL } from '../actions/modalActions'
import { type Movie } from '../../models/movies'

export interface ModalState {
  showModal: boolean
  movie: Movie
}

const movieInitialState: Movie = {
  poster_path: '',
  adult: false,
  overview: '',
  release_date: '',
  genre_ids: [],
  id: 0,
  original_title: '',
  original_language: '',
  title: '',
  backdrop_path: ''
}

const initialState: ModalState = {
  showModal: false,
  movie: movieInitialState
}

function modalReducer (state: ModalState | undefined, action: CustomAction): ModalState {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        movie: action.movie
      }
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    default:
      return state
  }
}

export default modalReducer
