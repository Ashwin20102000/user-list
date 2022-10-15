/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Alert, Snackbar } from '@mui/material'

const Toast = (props) => {
  return (
    <div>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <Alert onClose={props.handleClose}   sx={{ width: '100%', background:"green",color:"#f2f2f2" }}>
          {
            props.message
          }
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Toast