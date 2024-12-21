import React from 'react'
import backButton from "../assets/backButton.svg"

function SeedWorld({SeedWorldFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={SeedWorldFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default SeedWorld
