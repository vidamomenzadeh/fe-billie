import {Customer} from './index'

/**
 *  Get Customer
 */
export const fetchCustomer = (payload) => ({
  type: Customer.FETCH.REQUEST,
  payload
})

export const fetchCustomerSuccess = (payload) => ({
  type: Customer.FETCH.SUCCESS,
  payload
})

export const fetchCustomerError = (payload) => ({
  type: Customer.FETCH.ERROR,
  payload
})

/**
 *  Update Customer
 */
export const updateCustomer = (payload) => ({
  type: Customer.UPDATE.REQUEST,
  payload
})
