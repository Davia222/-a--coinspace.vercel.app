import React from 'react'
import backButton from "../assets/backButton.svg"

function TheGrapes({TheGrapesFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={TheGrapesFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default TheGrapes
