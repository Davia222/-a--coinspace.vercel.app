import React from 'react'
import backButton from "../assets/backButton.svg"

function Doodles({DoodlesFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={DoodlesFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default Doodles
