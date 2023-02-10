import { fork } from 'redux-saga/effects'
import moviesSaga from './moviesSaga'

function * rootSaga (): any {
  yield fork(moviesSaga)
}

export default rootSaga
