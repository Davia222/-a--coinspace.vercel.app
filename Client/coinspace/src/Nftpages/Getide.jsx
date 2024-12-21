import React from 'react'
import backButton from "../assets/backButton.svg"

function Getide({getijdeFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={getijdeFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default Getide
