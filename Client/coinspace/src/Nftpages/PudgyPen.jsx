import React from 'react'
import backButton from "../assets/backButton.svg"

function PudgyPen({PudgyPenFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={PudgyPenFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default PudgyPen
