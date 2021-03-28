import {all} from 'redux-saga/effects'
import {customerSaga} from './customer'

export default function* rootSaga() {
  const sagas = [customerSaga()]

  yield all(sagas)
}
