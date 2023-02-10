import { call, put, takeLatest } from 'redux-saga/effects'
import { getSearchedMovies } from '../../../services/BackendService'
import {
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_REQUEST, SEARCH_MOVIE_SUCCESS
} from '../actions/movieActions'
import { type CustomAction, SHOW_ERROR_TOAST, startAction, stopAction } from '../actions/uiActions'

function * handleSearchedMovies (action: CustomAction): any {
  try {
    yield put(startAction(action.type))
    const movies: any = yield call(getSearchedMovies, action.searchParam)
    yield put({ type: SEARCH_MOVIE_SUCCESS, payload: movies.data })
  } catch (e: any) {
    console.error(e)
    yield put({ type: SEARCH_MOVIE_FAILURE })
    yield put({ type: SHOW_ERROR_TOAST, message: e.message })
  } finally {
    yield put(stopAction(action.type))
  }
}
function * moviesSaga (): any {
  yield takeLatest(SEARCH_MOVIE_REQUEST, handleSearchedMovies)
}

export default moviesSaga
