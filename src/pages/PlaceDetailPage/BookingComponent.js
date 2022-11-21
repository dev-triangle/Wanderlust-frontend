import React from 'react'
const BookingComponent = ({state,prevFrame,nextFrame}) => {
  if(state===0){
    return(
      <div style={{width:'10rem',height:'10rem',backgroundColor:'blue'}}>
          <button onClick={nextFrame}>Prev</button>
      </div>
    )
  }
  else if(state===1){
    return(
      <div style={{width:'10rem',height:'10rem',backgroundColor:'red'}}>
        <button onClick={prevFrame}>Next</button>
      </div>
    )
  }
}

export default BookingComponent