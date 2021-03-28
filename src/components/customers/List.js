import {useEffect, useState, Fragment} from 'react'
import {connect} from 'react-redux'

import {fetchCustomer} from '../../actions/customer'
import {getCustomerById} from '../../reducers/customer'

import Form from './Form'
import {toGermanFormat} from '../../utils'

import {makeStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableHeader: {
    background: '#ff4338'
  }
})

const ListOfCustomers = ({fetchCustomer, customers}) => {
  const classes = useStyles()
  const [showModal, setShowModal] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState({})

  useEffect(() => {
    fetchCustomer()
  }, [])

  const handleClose = () => setShowModal(false)

  const renderCustomersRows = (customers) =>
    Object.keys(customers).map((row) => {
      const customer = customers[row]

      return (
        <TableRow
          key={`customer-${customer.id}`}
          onClick={() => {
            setShowModal(true)
            setSelectedCustomer(customer)
          }}
        >
          <TableCell component='th' scope='row'>
            {customer.name}
          </TableCell>

          <TableCell align='center'>
            {customer.date_of_first_purchase}
          </TableCell>
          <TableCell align='center'>
            {toGermanFormat(customer.budget)}
          </TableCell>
          <TableCell align='center'>
            {toGermanFormat(customer.budget_spent)}
          </TableCell>
          <TableCell align='center'>
            {toGermanFormat(customer.budget_left)}
          </TableCell>
        </TableRow>
      )
    })

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell>Company Name</TableCell>
              <TableCell align='center'>Date of first purchase</TableCell>
              <TableCell align='center'>Total budget</TableCell>
              <TableCell align='center'>Budget spent</TableCell>
              <TableCell align='center'>Budget left</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderCustomersRows(customers)}</TableBody>
        </Table>
      </TableContainer>
      <Form
        open={showModal}
        handleClose={handleClose}
        selectedCustomer={selectedCustomer}
      />
    </Fragment>
  )
}

function mapStateToProps(state) {
  return {
    customers: getCustomerById(state)
  }
}

export default connect(mapStateToProps, {
  fetchCustomer
})(ListOfCustomers)
