import {takeLatest, put} from 'redux-saga/effects'

import * as actions from '../actions/customer'
import {Customer} from '../actions'
import {reqCustomers} from '../api/customer'

function* getCustomers() {
  try {
    let response = yield reqCustomers()

    response = response.map((customer) => {
      customer.budget_left = customer.budget - customer.budget_spent

      return customer
    })

    yield put(actions.fetchCustomerSuccess(response))
  } catch (error) {
    yield put(actions.fetchCustomerError(error.message))
  }
}

export function* customerSaga() {
  yield takeLatest(Customer.FETCH.REQUEST, getCustomers)
}
