/* eslint-disable no-undef */
import {UpdateBudget} from '../components/customers/Form'
import {render, fireEvent} from '@testing-library/react'

const TEST_CUSTOMER = {
  id: 2,
  name: 'Solar Firma',
  budget: 1123.22,
  budget_spent: 451.3754,
  date_of_first_purchase: '2120 - 01 - 14'
}

test('Customer modal render correctly when props open is true', async () => {
  const {container, getByTestId} = render(<UpdateBudget open={true} />)

  expect(getByTestId('update-modal')).toBeInTheDocument()
  expect(getByTestId('input-budget-value')).toBeInTheDocument()
  expect(getByTestId('btn-submit')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

test('Customer modal render correctly when props open is false', async () => {
  const {container, queryAllByTestId} = render(<UpdateBudget open={false} />)

  expect(queryAllByTestId('update-modal')).toHaveLength(0)
  expect(queryAllByTestId('input-budget-value')).toHaveLength(0)
  expect(queryAllByTestId('btn-submit')).toHaveLength(0)

  expect(container).toMatchSnapshot()
})

test('submit butn should be disabled when the input value is less than spend value', async () => {
  const {getByTestId} = render(
    <UpdateBudget open={true} selectedCustomer={TEST_CUSTOMER} />
  )
  const inputBudget = getByTestId('input-budget-value').querySelector('input')
  const btnSubmit = getByTestId('btn-submit')

  await fireEvent.change(inputBudget, {target: {value: '90'}})

  expect(btnSubmit).toBeDisabled()
})

test('submit butn should be disabled when the input value is bigger than spend value', async () => {
  const {getByTestId} = render(
    <UpdateBudget open={true} selectedCustomer={TEST_CUSTOMER} />
  )
  const inputBudget = getByTestId('input-budget-value').querySelector('input')
  const btnSubmit = getByTestId('btn-submit')

  await fireEvent.change(inputBudget, {target: {value: '9000'}})

  expect(btnSubmit).not.toBeDisabled()
})
