import React from 'react'
import backButton from "../assets/backButton.svg"

function RedactedRemi({RedactedRemiFunc}) {
  return (
    <>
     <section>
    <div className='backDiv' onClick={RedactedRemiFunc}>
    <img src={backButton} alt="" className='backButton'  />
    </div>
       

       </section>
    </>
  )
}

export default RedactedRemi
