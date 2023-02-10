import { combineReducers } from 'redux'
import movieReducer, { type MovieState } from './movieReducer'
import { type UiState } from './uiReducer'
import uiReducer from './uiReducer'

export interface AppState {
  movies: MovieState
  ui: UiState
}

const createRootReducer = (): any =>
  combineReducers({
    movies: movieReducer,
    ui: uiReducer
  })

export default createRootReducer
