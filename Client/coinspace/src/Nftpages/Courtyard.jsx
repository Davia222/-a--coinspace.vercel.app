import React from 'react'
import backButton from "../assets/backButton.svg"

function Courtyard({CourtyardFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={CourtyardFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default Courtyard
