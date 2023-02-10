import { combineReducers } from 'redux'
import movieReducer, { type MovieState } from './movieReducer'
import { type UiState } from './uiReducer'
import uiReducer from './uiReducer'
import modalReducer, { type ModalState } from './modalReducer'

export interface AppState {
  movies: MovieState
  ui: UiState
  modal: ModalState
}

const createRootReducer = (): any =>
  combineReducers({
    movies: movieReducer,
    ui: uiReducer,
    modal: modalReducer
  })

export default createRootReducer
