import React from 'react'
import Dialog from '@mui/material/Dialog';
import './BookerDialog.css'
import dialogvector from '../../assets/svg/dialogvector.svg'
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
        
        <div className="main_dialog_content">
          <p className='confirm__book_que'>Are You sure you want to book the package ?</p>
          <div className="button_continer_dialog">
          <button  className='prev__button' onClick={handleClose}>No</button>
        <button  className='next__button' onClick={finalSubmit}>Yes</button>
          </div>
        </div>
        <img src={dialogvector} alt="dialog_vecotr" />
      </Dialog>
    </div>
  )
}

export default BookerDialog