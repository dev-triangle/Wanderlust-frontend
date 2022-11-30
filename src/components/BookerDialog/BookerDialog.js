import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const BookerDialog = ({handleClose,open,finalSubmit}) => {
  return (
    <div>
        <Dialog
        fullWidth={true}
        maxWidth={"md"}
        PaperProps={{
          sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "60vh" },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          
        </DialogTitle>
        <div className="question_confirn__main">
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <p className='book_confirm__ques'>Are you sure you want to place order ?</p> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          PaperProps={{
            sx:{color:'#002B5B',fontFamily:'Robotto',fontSize:'2rem'}
          }}
           onClick={handleClose} variant="outlined">No</Button>
          <Button onClick={finalSubmit} autoFocus>
            Yes
          </Button>
        </DialogActions>
        </div>
        
      </Dialog>
    </div>
  )
}

export default BookerDialog