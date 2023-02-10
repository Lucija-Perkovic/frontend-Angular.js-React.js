import { type Movie } from '../../models/movies'

export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function requestOpenModal (movie: Movie): any {
  return { type: SHOW_MODAL, movie }
}
export function requestCloseModal (): any {
  return { type: CLOSE_MODAL }
}
