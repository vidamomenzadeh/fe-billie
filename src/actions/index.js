import {createActionSet} from '../utils/actionHelper'

export const Customer = {
  FETCH: createActionSet('CUSTOMER_FETCH'),
  UPDATE: createActionSet('CUSTOMER_UPDATE')
}
