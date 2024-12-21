import React from 'react'
import backButton from "../assets/backButton.svg"

function Zeeverse({zeeverseFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={zeeverseFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default Zeeverse
