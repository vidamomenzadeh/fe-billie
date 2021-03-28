import {combineReducers} from 'redux'
import {Customer} from '../actions'

export const byId = (state = [], action) => {
  switch (action.type) {
    case Customer.FETCH.SUCCESS:
      return {
        ...state,
        ...action.payload.reduce((obj, customer) => {
          obj[customer.id] = customer

          return obj
        }, {})
      }

    case Customer.UPDATE.REQUEST:
      return {
        ...state,
        [action.payload.customer.id]: action.payload.customer
      }

    default:
      return state
  }
}

export const getCustomerById = (state) => {
  return state?.customer ? state.customer.byId : {}
}

export default combineReducers({
  byId
})
