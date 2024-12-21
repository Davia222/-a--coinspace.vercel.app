import React from 'react'
import backButton from "../assets/backButton.svg"

function CubaAPlace({CubaAPlaceFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={CubaAPlaceFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default CubaAPlace
