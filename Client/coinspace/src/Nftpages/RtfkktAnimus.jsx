import React from 'react'
import backButton from "../assets/backButton.svg"

function RtfkktAnimus({RtfkktAnimusFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={RtfkktAnimusFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default RtfkktAnimus
