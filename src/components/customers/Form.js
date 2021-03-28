import {useRef, useState} from 'react'
import {connect} from 'react-redux'

import {makeStyles} from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import {updateCustomer} from '../../actions/customer'

import {BurronWrapper} from '../customers/styledComponent'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    minWidth: '600px'
  }
}))

export const UpdateBudget = (props) => {
  const classes = useStyles()
  const inputEl = useRef(null)
  const [valid, setValid] = useState(true)
  const [showDialog, setShowDialog] = useState(false)
  const {open, handleClose, selectedCustomer = {}, updateCustomer} = props

  const isValid = () => {
    if (parseFloat(inputEl.current.value) < selectedCustomer.budget_spent) {
      setValid(false)

      return
    }

    setValid(true)
  }

  const submit = () => {
    updateCustomer({
      customer: {
        ...selectedCustomer,
        budget: parseFloat(inputEl.current.value)
      }
    })

    setShowDialog(true)
  }

  const hideDialog = () => {
    setShowDialog(false)
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        data-testid='update-modal'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>{selectedCustomer.name}</h2>
            <TextField
              required
              inputRef={inputEl}
              type='number'
              id='standard-required'
              label='Budget'
              defaultValue={selectedCustomer.budget}
              onChange={isValid}
              data-testid='input-budget-value'
            />
            <BurronWrapper>
              <Button
                variant='contained'
                color='primary'
                disabled={!valid}
                onClick={submit}
                data-testid='btn-submit'
              >
                Submit
              </Button>
            </BurronWrapper>
          </div>
        </Fade>
      </Modal>
      <Dialog
        open={showDialog}
        onClose={handleClose}
        fullWidth={true}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {'Budget is updated'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Go back to List</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setShowDialog(false)}
            color='primary'
          >
            Cancel
          </Button>
          <Button onClick={hideDialog} color='primary' autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, {
  updateCustomer
})(UpdateBudget)
